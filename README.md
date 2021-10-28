# Discord-JSON-Bot
## How to use
First, download the [latest release](https://github.com/Kheeto/Discord-JSON-Bot/releases)<br>
Then extract the zip/tar.gz file and use the "modules.bat" file to install the required libraries<br>
Once you did it, put your bot token in the ".env" file after "TOKEN="<br>
Then, finally start the bot by opening the "start.bat" file.<br>

## How does it work?
So basically, when you start the bot it will read the data from the JSON file "example.json" and by using the "!example" command, it will send you a text based on the guild id, defined in the JSON file.

### How the JSON should look like
```
{
    "guild id": "message for that guild"
}
```
### An example of the JSON
```
{
    "803310053653872741": "example text",
    "81384788765712384": "discord api goes brrrr",
    "474583323340046337": "milk gang? very cool."
}
```
