# Wiggle and Shake

This was a fun experiment in creating something obnoxious and loud.

## Wiggle
I wanted to replicate the "wiggle" effect of After Effects. The wiggle effect is created in javascript and it randomly adjusts each character's relative position.

## Shake
The polygon shake is achieved by randomly adjusting polygon points in an svg object. 

1. An original set of points are stored as a point of reference.
2. A new set of points are generated randomly within a set deviation of the original set.
3. The new points are then assigned to the svg polygon.
4. The process is repeated, creating a shaking effect.
