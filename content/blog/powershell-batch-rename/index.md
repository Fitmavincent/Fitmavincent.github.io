# Powershell Batch Rename 

For a long long time, I've been searching for a batch rename tools or command line, or script to do the work. Today, I've tested with a Powershell script that works for me

Example
```ps
get-childitem *.png | rename-item -newname { $_.name -replace 'S', 'Spring '}
```

Turn this:
```
S01.png
S02.png
S03.png
S04.png
```
Into: 
```
Spring 01.png
Spring 02.png
Spring 03.png
Spring 04.png
```


