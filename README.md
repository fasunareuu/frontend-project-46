### Hexlet tests and linter status:

[![Actions Status](https://github.com/fasunareuu/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/fasunareuu/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/81a4fc89f03313e701ae/maintainability)](https://codeclimate.com/github/fasunareuu/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/81a4fc89f03313e701ae/test_coverage)](https://codeclimate.com/github/fasunareuu/frontend-project-46/test_coverage)

# Вычислитель различий

Данный проект представляет собой консольную утилиту для сравнения двух объектов. Объекты считываются только из файлов форматов JSON, YML и YAML.

# Пример работы

```
gendiff file1.json file2.json

{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow:
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}
```

<<<<<<< HEAD
=======

>>>>>>> c7a08d56d01a260703e347b300f3ae001271bac2
# Установка

```
git clone git@github.com:nick-shaydayuk/frontend-project-46.git
cd frontend-project-46
make install
```

# Использование

```
gendiff [options] <filepath1> <filepath2>
например: gendiff -f plain file1.json file2.yaml
```

```
options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           display help for command
```

Программа умеет выводить различия в трех форматах, по умолчанию это формат stylish. Также это могут быть plain и json. Для вывода результата согласно определенному формату введите -f [format]

```
gendiff -f plain file1.json file2.yaml
```
<<<<<<< HEAD

Пример такого вывода:

=======
Пример такого вывода:
>>>>>>> c7a08d56d01a260703e347b300f3ae001271bac2
```
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```
