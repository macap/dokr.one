#!/bin/bash

read -p "Enter tool name: " name

read -p "Enter category [other]:" category

cp src/data/tools/template.json src/data/tools/$name.json
sed -i "s/template/$name/gi" src/data/tools/$name.json

if [ $category != "" ]; then
sed -i "s/other/$category/gi" src/data/tools/$name.json
fi