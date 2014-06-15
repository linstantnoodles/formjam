
import cv2
import numpy as np
import time

# Loads image of a word, outputs segmented connected components

file = '/Applications/GPU/www.iam.unibe.ch/~fkiwww/iamDB/data/lines/e06/e06-010/e06-010-06.png'


pic = cv2.imread(file,2)
print(pic)
ret,thresh = cv2.threshold( pic , 150, 255, 0)
kernel = np.ones((5,5),dtype='uint8')
erosion = cv2.erode(thresh,kernel,3)
edges = cv2.Canny(erosion,100,300,0)
contours, hierarchy = cv2.findContours(edges , 0 , 3) 
rects = []
for contour in contours:
	rects.append( cv2.boundingRect(contour) )
x,y,w,h = 0,0,0,0
i = 0
cv2.imshow('thresh',thresh)
for rect in rects:
	x,y,w,h = rect[0],rect[1],rect[2],rect[3]
	roi = thresh[y:y+h,x:x+w]
	#cv2.rectangle( thresh , (x,y) , (x+w,y+h) , (0,255,0) )
	cv2.imwrite('output/'+str(i)+'.png',roi )
	i = i+1 
cv2.imshow('rectangle',thresh ) 

time.sleep(10)
