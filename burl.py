import cv2

burl_new = 15

def onChange(tk):
    if tk<=0 :
        return
    img=cv2.blur(dog,(tk,tk))
    cv2.imshow("dog",img)


if __name__=="__main__":
    cv2.namedWindow("dog")
    dog=cv2.imread("dog.jpg")
    cv2.createTrackbar("burl_tk","dog",burl_new,30,onChange)
    cv2.imshow("dog",dog)
    onChange(0)
    cv2.waitKey(0)
    cv2.destroyWindow("dog")
