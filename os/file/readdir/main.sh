#!/bin/bash
#
# Work Fodler
# 

cd $(dirname $0)

mkdir -p path/to/folder/
touch path/to/file1.txt
touch path/to/folder/file2.txt
touch path/to/folder/file3.txt



## 使用 ls -l 判断是文件还是目录， 太麻烦了。 需要判断首字母是否为d
# → ls -l
# total 8
# -rw-r--r--  1 franktang  staff  201  8 25 16:06 main.sh
# drwxr-xr-x  3 franktang  staff   96  8 25 16:03 path

## 使用 find 
for dir in $(find . -type d)
do
{
    (
        cd $dir
        pwd
        local n=0
        for file in $(find . -type f -maxdepth 1)
        do
        {
            n=$((n+1))
            echo "$n: $file"
        }
        done
    )
}
done


## use built-in "flag" to check if targe is a directory or a file
## -f / -d
## NOTE: if the target is a symbolic lin or doesn't exist, it will return false

function walk() {
    local path=$1
    if [ -d $path ]; then
        for file in $(ls $path)
        do
            walk $path/$file
        done
    else
        echo $path
    fi
}

echo "walk -d"
walk .