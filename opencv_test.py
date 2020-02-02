import cv2
threshold_value = 175
threshold_max = 255
input_title = "input window"
output_title = "output window"
def threshold_demo(threshold_value):
    gray_src = cv2.cvtColor(src, cv2.COLOR_BGR2GRAY)
    ret, dst = cv2.threshold(gray_src, threshold_value, threshold_max, cv2.THRESH_BINARY)
    # dst = cv2.bitwise_not(dst)
    cv2.imshow(output_title, dst)
if __name__ == "__main__":
    src = cv2.imread("dog.jpg")
    cv2.namedWindow(output_title)
    cv2.namedWindow(input_title)
    cv2.imshow(input_title, src)
    cv2.createTrackbar("Threshold Value:", "output window", threshold_value, threshold_max, threshold_demo)
    cv2.setTrackbarPos("Threshold Value:", "output window", threshold_max)
    threshold_demo(0)
    cv2.waitKey(0)
