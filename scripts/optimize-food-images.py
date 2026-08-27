#!/usr/bin/env python3
"""Create compact, progressively encoded food photos for the mini program."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image


HERO_IMAGES = {
    "fried-chicken.jpg",
    "hot-pot.jpg",
    "burger.jpg",
    "italian.jpg",
    "sushi-02.jpg",
    "bubble-tea.jpg",
    "rice-pork.jpg",
    "congee-chicken.jpg",
    "bbq-skewers.jpg",
    "thai-pad.jpg",
    "gelato-waffle.jpg",
    "bakery-sourdough.jpg",
    "coffee-flatwhite.jpg",
    "braised-pork.jpg",
    "sweet-redbean.jpg",
    "home-stirfry-beef.jpg",
    "sichuan-mapo.jpg",
    "jiangxi-pork.jpg",
}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--dish-size", type=int, default=400)
    parser.add_argument("--dish-quality", type=int, default=45)
    parser.add_argument("--hero-size", type=int, default=500)
    parser.add_argument("--hero-quality", type=int, default=55)
    args = parser.parse_args()

    args.output.mkdir(parents=True, exist_ok=True)
    total = 0
    count = 0
    for source in sorted(args.source.glob("*.jpg")):
        is_hero = source.name in HERO_IMAGES
        max_size = args.hero_size if is_hero else args.dish_size
        quality = args.hero_quality if is_hero else args.dish_quality
        destination = args.output / source.name

        with Image.open(source) as image:
            image = image.convert("RGB")
            image.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
            image.save(
                destination,
                "JPEG",
                quality=quality,
                optimize=True,
                progressive=True,
                subsampling=2,
            )

        total += destination.stat().st_size
        count += 1

    print(f"optimized={count} bytes={total} MiB={total / 1024 / 1024:.3f}")


if __name__ == "__main__":
    main()
