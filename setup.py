import sys

from setuptools import setup  # type: ignore[import]

__author__ = "PurkkaKoodari"
__url__ = "https://gitlab.com/holyspiritomb/pyxyzzy"
__version__ = "0.0.1"


__long_description__ = """
``pyxyzzy`` is a Cards Against Humanity game.
"""

install_requires = [
    "websockets >= 12.0",
    "toml >= 0.10.2",
    "peewee >= 3.17.0",
]
setup(
    name="pyxyzzy",
    version=__version__,
    author=__author__,
    license="GPL",
    url=__url__,
    packages=["pyxyzzy"],
    entry_points={
        "console_scripts": [
            "pyxyzzy-server = pyxyzzy.__main__:main"
        ]
    },
    python_requires=">=3.8",
    install_requires=install_requires,
    include_package_data=True,
    platforms="any",
    long_description=__long_description__,
    classifiers=[
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
    ],
)
