---
title: "File format"
weight: 10
---

CrySPY uses the [configparser](https://docs.python.org/3/library/configparser.html)<i class="fas fa-external-link-alt"></i> module to read input file, `cryspy.in` .
`cryspy.in` consists of sections, led by a `[section]` header and followed by `name = value` or `name : value` entries.
Section names and values are case sensitive, but names are not.
Lines beginning with `#` or `;` are ignored and may be used to provide comments.
Accepted bool values are `1`, `yes`, `true`, and `on`, which cause this method to return `True`,
and `0`, `no`, `false`, and `off`, which cause it to return `False`.
These string values for bool are checked in a case-insensitive manner.
Some values are given in a space-separated manner.


{{% notice info %}}
See [configparser](https://docs.python.org/3/library/configparser.html)<i class="fas fa-external-link-alt"></i> in detail.
{{% /notice %}}

{{% notice note %}}
section name: case sensitive  
name: case insensitive  
value: case sensitive except for bool
{{% /notice %}}
