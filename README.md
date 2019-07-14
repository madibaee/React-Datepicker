# React-Persian-Datepicker
React component for date inputs (gregorian & jalali).
[demo](https://madibaee.github.io/React-Datepicker/demo/)

## Install

```shell
npm install @diba/react-datepicker --save-dev
```

## Webpack
```javascript
import Datepicker from '@diba/react-datepicker';
```

## Setup

### Calendar type

default: ```gregorian```

available option: ```persian``` ```gregorian```

```javascript
import Datepicker from '@diba/react-datepicker';

<Datepicker calendar="gregorian" />
<Datepicker calendar="persian" />
```

### Locale

default: ```en```

available option: ```en``` ```fa```

```javascript
import Datepicker from '@diba/react-datepicker';

<Datepicker calendar="gregorian" locale="en" />
```

### Locale

default: ```en```

available option: ```en``` ```fa```

```javascript
import Datepicker from '@diba/react-datepicker';

<Datepicker calendar="gregorian" locale="en" />
<Datepicker calendar="gregorian" locale="fa" />
<Datepicker calendar="persian" locale="fa" />
<Datepicker calendar="persian" locale="en" />
```

### Display Format

default: ```l```

```javascript
import Datepicker from '@diba/react-datepicker';

<Datepicker format="MMM D, YYYY" />
```

This is the most robust display option. It takes a string of tokens and replaces them with their corresponding values.


| format	     | en              | fa	             |
| -------------|:---------------:|:---------------:|
|M             | 1 2 ... 11 12   | ۱ ۲ ... ۱۱ ۱۲  |
|MM      	     | 01 02 ... 11 12 | ۰۱ ۰۲ ... ۱۱ ۱۲|
|MMM           | Jan Feb ... Dec | فرو ارد ... اسف|
|MMMM          | January February ... December | فروردین اردیبهشت ... اسفند |
|D             | 1 2 ... 30 31   | ۱ ۲ ... ۳۰ ۳۱|
|DD            | 01 02 ... 30 31 | ۰۱ ۰۲ ... ۳۰ ۳۱|
|DDD           | 1 2 ... 364 365 | ۱ ۲ ... ۳۶۴ ۳۶۵|
|d             | 1 2 3 4 5 6 7   | ۱ ۲ ۳ ۴ ۵ ۶ ۷ |
|ddd           | Sun Mon ... Fri Sat | ش ی ... ج |
|dddd          | Sunday Monday ... Saturday |شنبه یکشنبه ... جمعه|
|YY            | 91 92 ... 18 19 | ۶۶ ۹۱ ... ۹۸ ۳۰ |
|YYYY          | 1991 1992 ... 2018 2019 | ۱۳۶۶ ۱۳۹۱ ... ۱۳۹۸ ۱۴۰۱ |
|L(YYYY/MM/DD) | 2019/06/25       | ۱۳۹۸/۰۴/۲۹ |
|l(YYYY/M/D)   | 2019/6/25        | ۱۳۹۸/۴/۲۹ |
|LL(MMMM DD YYYY)| June 25 2019   | اردیبهشت ۲۰ ۱۳۹۲|
|ll(MMM DD YYYY) | Jun 25 2019    | ارد ۲۰ ۱۳۹۲|
