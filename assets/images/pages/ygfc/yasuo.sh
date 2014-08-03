#!/bin/sh
for img in `find ./ -name "*.jpg"`; do
                convert -resize 15%*15% $img $img-resized;
                rm $img;
                mv $img-resized $img
                echo $img
done
