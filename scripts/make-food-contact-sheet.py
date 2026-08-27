#!/usr/bin/env python3
"""Build labeled contact sheets for visually auditing local food assets."""

import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


parser = argparse.ArgumentParser()
parser.add_argument("source", nargs="?", type=Path, default=Path(__file__).resolve().parents[1] / "src/assets/food")
parser.add_argument("output", nargs="?", type=Path, default=Path("/private/tmp/fake-food-contact-sheets"))
args = parser.parse_args()
args.output.mkdir(parents=True, exist_ok=True)

files = sorted(path for path in args.source.glob("*.jpg") if not path.name.endswith("-mini.jpg"))
font = ImageFont.load_default(size=18)
columns, rows = 4, 5
cell_width, image_height, label_height = 320, 240, 42

for page, start in enumerate(range(0, len(files), columns * rows), 1):
    canvas = Image.new("RGB", (columns * cell_width, rows * (image_height + label_height)), "white")
    draw = ImageDraw.Draw(canvas)
    for index, path in enumerate(files[start : start + columns * rows]):
        row, column = divmod(index, columns)
        x, y = column * cell_width, row * (image_height + label_height)
        with Image.open(path) as source:
            source = source.convert("RGB")
            ratio = max(cell_width / source.width, image_height / source.height)
            source = source.resize((round(source.width * ratio), round(source.height * ratio)), Image.Resampling.LANCZOS)
            left = (source.width - cell_width) // 2
            top = (source.height - image_height) // 2
            canvas.paste(source.crop((left, top, left + cell_width, top + image_height)), (x, y))
        draw.rectangle((x, y + image_height, x + cell_width, y + image_height + label_height), fill="white")
        draw.text((x + 8, y + image_height + 10), path.name, fill="#111111", font=font)
    destination = args.output / f"food-audit-{page}.jpg"
    canvas.save(destination, "JPEG", quality=88, optimize=True)
    print(destination)
