
import cv2
import numpy as np
import time
# takes in image of a form, outputs the parsed files to a directory, rectangle details for the input

def extractRectangle(img,rectangle):
	x = rectangle[0][0][0]
	y = rectangle[0][0][1]
	w = rectangle[0][0][1] - rectangle[1][0][1]
	h = rectangle[3][0][0]-rectangle[0][0][0]
	#x,y,w,h = rec[0],rect[1],rect[2],rect[3]
	roi = thresh[y:y+h,x:x+w]
	return roi



file = "trauma_form.png"
img = cv2.imread(file,2)
kernel = np.ones((5,5),'uint8')
ret,thresh = cv2.threshold(img,50,255,0)
erosion = cv2.erode(thresh,kernel,2)
edges = cv2.Canny(erosion,100,300,0)
contours, hierarchy = cv2.findContours(edges , 3 , 1)

starts = [64,2]
target_fields = []
im = cv2.imread(file,1)
for start in starts:
	c = hierarchy[0][start]
	target_fields.append(contours[start])
	while c[0]>0:
		target_fields.append( contours[ c[0] ] )
		c = hierarchy[0][ c[0] ]



for i in range( 0,len(target_fields) ):
	cv2.drawContours(im,target_fields,i,(0,255,0) )

cv2.imshow('form',im )

rects = []
for t in target_fields:
	#approx = cv2.approxPolyDP( t , cv2.arcLength(t,True)*.02 , True )
	rects.append( cv2.boundingRect(t) )

x,y,w,h = 0,0,0,0
i = 0
for rect in rects:
        x,y,w,h = rect[0],rect[1],rect[2],rect[3]
        roi = thresh[y:y+h,x:x+w]
        #cv2.rectangle( thresh , (x,y) , (x+w,y+h) , (0,255,0) )
        cv2.imwrite('output/'+str(i)+'.png',roi )
        cv2.imshow('file'+str(i),roi)
	time.sleep(1)
	i = i+1





