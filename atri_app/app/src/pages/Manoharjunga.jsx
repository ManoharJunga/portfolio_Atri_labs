import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex36Cb, useFlex37Cb, useFlex40Cb, useFlex42Cb, useFlex43Cb, useFlex44Cb, useFlex45Cb, useFlex46Cb, useFlex47Cb, useFlex48Cb, useFlex49Cb, useFlex50Cb, useImage30Cb, useTextBox42Cb, useTextBox43Cb, useImage33Cb, useTextBox38Cb, useButton2Cb, useImage28Cb, useTextBox40Cb, useTextBox45Cb, useImage34Cb, useTextBox46Cb, useTextBox47Cb, useImage35Cb, useTextBox48Cb, useTextBox49Cb, useImage37Cb, useTextBox50Cb, useTextBox51Cb, useImage38Cb, useTextBox52Cb, useTextBox53Cb, useImage40Cb, useTextBox54Cb, useTextBox55Cb, useImage41Cb, useTextBox56Cb, useTextBox57Cb, useTextBox58Cb, useImage43Cb, useImage44Cb, useImage45Cb, useImage46Cb } from "../page-cbs/manoharjunga";
import "../page-css/manoharjunga.css"

export default function Manoharjunga() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex36Props = useStore((state)=>state["manoharjunga"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["manoharjunga"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex37Props = useStore((state)=>state["manoharjunga"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["manoharjunga"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex40Props = useStore((state)=>state["manoharjunga"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["manoharjunga"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex42Props = useStore((state)=>state["manoharjunga"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["manoharjunga"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex43Props = useStore((state)=>state["manoharjunga"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["manoharjunga"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex44Props = useStore((state)=>state["manoharjunga"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["manoharjunga"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex45Props = useStore((state)=>state["manoharjunga"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["manoharjunga"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["manoharjunga"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["manoharjunga"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["manoharjunga"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["manoharjunga"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex48Props = useStore((state)=>state["manoharjunga"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["manoharjunga"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex49Props = useStore((state)=>state["manoharjunga"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["manoharjunga"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["manoharjunga"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["manoharjunga"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Image30Props = useStore((state)=>state["manoharjunga"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["manoharjunga"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox42Props = useStore((state)=>state["manoharjunga"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["manoharjunga"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Image33Props = useStore((state)=>state["manoharjunga"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["manoharjunga"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox38Props = useStore((state)=>state["manoharjunga"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Button2Props = useStore((state)=>state["manoharjunga"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["manoharjunga"]["Button2"]);
const Button2Cb = useButton2Cb()
const Image28Props = useStore((state)=>state["manoharjunga"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["manoharjunga"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox40Props = useStore((state)=>state["manoharjunga"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox45Props = useStore((state)=>state["manoharjunga"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const Image34Props = useStore((state)=>state["manoharjunga"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["manoharjunga"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox46Props = useStore((state)=>state["manoharjunga"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["manoharjunga"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const Image35Props = useStore((state)=>state["manoharjunga"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["manoharjunga"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox48Props = useStore((state)=>state["manoharjunga"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["manoharjunga"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Image37Props = useStore((state)=>state["manoharjunga"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["manoharjunga"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox50Props = useStore((state)=>state["manoharjunga"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["manoharjunga"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const Image38Props = useStore((state)=>state["manoharjunga"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["manoharjunga"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox52Props = useStore((state)=>state["manoharjunga"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["manoharjunga"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Image40Props = useStore((state)=>state["manoharjunga"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["manoharjunga"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox54Props = useStore((state)=>state["manoharjunga"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["manoharjunga"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Image41Props = useStore((state)=>state["manoharjunga"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["manoharjunga"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox56Props = useStore((state)=>state["manoharjunga"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["manoharjunga"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["manoharjunga"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["manoharjunga"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const Image43Props = useStore((state)=>state["manoharjunga"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["manoharjunga"]["Image43"]);
const Image43Cb = useImage43Cb()
const Image44Props = useStore((state)=>state["manoharjunga"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["manoharjunga"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image45Props = useStore((state)=>state["manoharjunga"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["manoharjunga"]["Image45"]);
const Image45Cb = useImage45Cb()
const Image46Props = useStore((state)=>state["manoharjunga"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["manoharjunga"]["Image46"]);
const Image46Cb = useImage46Cb()

  return (<>
  <Flex1 className="p-manoharjunga Flex36" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<TextBox1 className="p-manoharjunga TextBox38" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<Button1 className="p-manoharjunga Button2" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex1>
<Flex1 className="p-manoharjunga Flex37" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Image1 className="p-manoharjunga Image28" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<TextBox1 className="p-manoharjunga TextBox40" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Flex1>
<Image1 className="p-manoharjunga Image30" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<TextBox1 className="p-manoharjunga TextBox42" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox1 className="p-manoharjunga TextBox43" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<Image1 className="p-manoharjunga Image33" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<Flex1 className="p-manoharjunga Flex40" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox1 className="p-manoharjunga TextBox45" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Flex1>
<Flex1 className="p-manoharjunga Flex42" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Flex1 className="p-manoharjunga Flex43" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Image1 className="p-manoharjunga Image34" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<TextBox1 className="p-manoharjunga TextBox46" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox1 className="p-manoharjunga TextBox47" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Flex1>
<Flex1 className="p-manoharjunga Flex44" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Image1 className="p-manoharjunga Image35" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<TextBox1 className="p-manoharjunga TextBox48" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox1 className="p-manoharjunga TextBox49" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex1>
<Flex1 className="p-manoharjunga Flex45" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Image1 className="p-manoharjunga Image37" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
<TextBox1 className="p-manoharjunga TextBox50" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox1 className="p-manoharjunga TextBox51" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-manoharjunga Flex46" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Flex1 className="p-manoharjunga Flex47" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Image1 className="p-manoharjunga Image38" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<TextBox1 className="p-manoharjunga TextBox52" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox1 className="p-manoharjunga TextBox53" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Flex1>
<Flex1 className="p-manoharjunga Flex48" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Image1 className="p-manoharjunga Image40" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
<TextBox1 className="p-manoharjunga TextBox54" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox1 className="p-manoharjunga TextBox55" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Flex1>
<Flex1 className="p-manoharjunga Flex49" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Image1 className="p-manoharjunga Image41" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
<TextBox1 className="p-manoharjunga TextBox56" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox1 className="p-manoharjunga TextBox57" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-manoharjunga Flex50" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<TextBox1 className="p-manoharjunga TextBox58" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<Image1 className="p-manoharjunga Image43" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<Image1 className="p-manoharjunga Image44" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<Image1 className="p-manoharjunga Image45" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<Image1 className="p-manoharjunga Image46" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
</Flex1>
  </>);
}
