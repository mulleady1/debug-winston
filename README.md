# NOT MAINTAINED

# debug-winston

Wrapper around the wonderful libraries [`debug`][1] and [`winston`][1].

Writes to winston if `process.env.LOG_FILE` exists; writes to debug otherwise.

# Usage

Same interface as `debug`:
```
const debug = require('debug-winston')('my:namespace');
debug('I am a debug message.');
```

[1]: https://github.com/visionmedia/debug
[2]: https://github.com/winstonjs/winston
