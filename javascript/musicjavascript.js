
		//設置音樂來源
		musicSrc=new Array()
		musicSrc[0]="./music/位置.mp3"
		musicSrc[1]="./music/Doris - 泣不成聲「任何舉動變不成我們。」動態歌詞版MV.mp3"
		musicSrc[2]="./music/印子月 - 很值得「可惜我們到現在才成熟。」動態歌詞版MV.mp3"
		musicSrc[3]="./music/李冰 - 找一個懂你的人不容易 (動態歌詞版MV).mp3"
		musicSrc[4]="./music/季彥霖 - 選擇失憶「可我還是會想你。」動態歌詞版MV.mp3"
		musicSrc[5]="./music/雨宗林 - 怎能放開你的手「你留下的溫柔賴著不走。」動態歌詞版MV.mp3"
		musicSrc[6]="./music/葉炫清 - 可惜「放開手會難過，說再見會痛。」動態歌詞版MV.mp3"
		musicSrc[7]="./music/夢然 - 做個好女人「再多的容忍都是對自己殘忍。」動態歌詞版MV.mp3"
		musicSrc[8]="./music/熊錦勝 - 她沒那麼愛你「獻給迷失在愛情裡的傻瓜。」動態歌詞版MV.mp3"
		musicSrc[9]="./music/伊晗 - 只是配角「裝什麼體面。」動態歌詞版MV.mp3"
        musicSrc[10]="./music/劉增瞳 - 後來的我們『為你撐傘的人已不在你左邊。』【動態歌詞Lyrics】.mp3"
        musicSrc[11]="./music/Jason - 錯過『最遺憾不是離開你，是還沒說出喜歡你。』【動態歌詞Lyrics】.mp3"
        musicSrc[12]="./music/劉安周 - 愛比不愛更難過「從此沒有你了。」動態歌詞版MV.mp3"   
        musicSrc[13]="./music/箱子君 - 我真的痛了「你選擇失憶，將愛過忘記。」動態歌詞版MV.mp3"
		musicSrc[14]="./music/季彥霖 - 錯愛 ft.劉增瞳「那麼傷那麼痛，那麼瘋狂想要懂。」動態歌詞版MV.mp3"
		musicSrc[15]="./music/於榮光  倪虹潔《少林英雄》『師父我堅持不住啦_』高音質  動態歌詞版MV.mp3"

		//設置音樂說明
		musicTxt=new Array()
		musicTxt[0]="位置.mp3"
		musicTxt[1]="Doris - 泣不成聲「任何舉動變不成我們。」.mp3"
		musicTxt[2]="印子月 - 很值得「可惜我們到現在才成熟。」.mp3"
		musicTxt[3]="李冰 - 找一個懂你的人不容易 mp3"
		musicTxt[4]="季彥霖 - 選擇失憶「可我還是會想你。」.mp3"
		musicTxt[5]="雨宗林 - 怎能放開你的手「你留下的溫柔賴著不走。」.mp3"
		musicTxt[6]="葉炫清 - 可惜「放開手會難過，說再見會痛。」.mp3"
		musicTxt[7]="夢然 - 做個好女人「再多的容忍都是對自己殘忍。」.mp3"
		musicTxt[8]="熊錦勝 - 她沒那麼愛你「獻給迷失在愛情裡的傻瓜。」.mp3"
        musicTxt[9]="伊晗 - 只是配角「裝什麼體面。」.mp3"
        musicTxt[10]="劉增瞳 - 後來的我們『為你撐傘的人已不在你左邊。』.mp3"
        musicTxt[11]="Jason - 錯過『最遺憾不是離開你，是還沒說出喜歡你。』.mp3"
        musicTxt[12]="劉安周 - 愛比不愛更難過「從此沒有你了。」.mp3" 
        musicTxt[13]="箱子君 - 我真的痛了「你選擇失憶，將愛過忘記。」.mp3"  
		musicTxt[14]="季彥霖 - 錯愛 ft.劉增瞳「那麼傷那麼痛，那麼瘋狂想要懂。」.mp3"
		musicTxt[15]="於榮光  倪虹潔《少林英雄》『師父我堅持不住啦_』.mp3"
		
	
		function playMusic(musicChg)
		{
			musicArea.innerHTML="<audio controls autoplay loop  ><source src='"+musicChg+"' type='audio/mpeg'  ></audio>"
		}
		
		function iniSelect()
		{
			musicArea.innerHTML="<audio controls autoplay loop  ><source src='"+musicSrc[15]+"' type='audio/mpeg'  ></audio>"
			document.musicForm.musicSelect.length=musicSrc.length
			for(x=0;x<musicSrc.length;x++)
			{
				document.musicForm.musicSelect.options[x].value=musicSrc[x]
				document.musicForm.musicSelect.options[x].text=musicTxt[x]
			}
			
		}
	
		