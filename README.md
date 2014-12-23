# audiobooks.js

Generates an rss feed of your audio books so that you can use the podcast player on your phone to listen to them.

Put the audio books in mp3 format in the ```audiobooks``` directory and start the application by running:
```
npm start
```

Or use a tool like [forever](https://github.com/foreverjs/forever)

## Settings
You can change the port number the application will listen to by setting the environment variable ```PORT```.

Change the path to the directory with audio books by setting the environment variable ```AUDIOBOOKS_DIR```

For example:
```
PORT=3001 AUDIOBOOKS_DIR=/tmp/audiobooks node audiobookfeed.js
```
