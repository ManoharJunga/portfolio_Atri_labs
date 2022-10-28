import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Carousel as Carousel1 } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { useFlex51Cb, useFlex52Cb, useFlex53Cb, useFlex55Cb, useFlex56Cb, useFlex57Cb, useTextBox60Cb, useTextBox61Cb, useImage49Cb, useTextBox59Cb, useButton4Cb, useTextBox62Cb, useTextBox63Cb, useImage47Cb, useTextBox64Cb, useImage48Cb, useCarousel3Cb, useTextBox65Cb, useTextBox66Cb, useImage50Cb } from "../page-cbs/profoodsapp";
import "../page-css/profoodsapp.css"

export default function Profoodsapp() {
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

  const Flex51Props = useStore((state)=>state["profoodsapp"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["profoodsapp"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex52Props = useStore((state)=>state["profoodsapp"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["profoodsapp"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex53Props = useStore((state)=>state["profoodsapp"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["profoodsapp"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex55Props = useStore((state)=>state["profoodsapp"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["profoodsapp"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex56Props = useStore((state)=>state["profoodsapp"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["profoodsapp"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex57Props = useStore((state)=>state["profoodsapp"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["profoodsapp"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const TextBox60Props = useStore((state)=>state["profoodsapp"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["profoodsapp"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["profoodsapp"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["profoodsapp"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const Image49Props = useStore((state)=>state["profoodsapp"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["profoodsapp"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox59Props = useStore((state)=>state["profoodsapp"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["profoodsapp"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const Button4Props = useStore((state)=>state["profoodsapp"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["profoodsapp"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox62Props = useStore((state)=>state["profoodsapp"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["profoodsapp"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["profoodsapp"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["profoodsapp"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Image47Props = useStore((state)=>state["profoodsapp"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["profoodsapp"]["Image47"]);
const Image47Cb = useImage47Cb()
const TextBox64Props = useStore((state)=>state["profoodsapp"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["profoodsapp"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Image48Props = useStore((state)=>state["profoodsapp"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["profoodsapp"]["Image48"]);
const Image48Cb = useImage48Cb()
const Carousel3Props = useStore((state)=>state["profoodsapp"]["Carousel3"]);
const Carousel3IoProps = useIoStore((state)=>state["profoodsapp"]["Carousel3"]);
const Carousel3Cb = useCarousel3Cb()
const TextBox65Props = useStore((state)=>state["profoodsapp"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["profoodsapp"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["profoodsapp"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["profoodsapp"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Image50Props = useStore((state)=>state["profoodsapp"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["profoodsapp"]["Image50"]);
const Image50Cb = useImage50Cb()

  return (<>
  <Flex2 className="p-profoodsapp Flex51" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox2 className="p-profoodsapp TextBox59" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<Button2 className="p-profoodsapp Button4" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex2>
<TextBox2 className="p-profoodsapp TextBox60" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox2 className="p-profoodsapp TextBox61" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<Flex2 className="p-profoodsapp Flex52" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Flex2 className="p-profoodsapp Flex53" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Image2 className="p-profoodsapp Image47" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Flex2>
<TextBox2 className="p-profoodsapp TextBox62" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox2 className="p-profoodsapp TextBox63" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Flex2>
<Image2 className="p-profoodsapp Image49" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
<Flex2 className="p-profoodsapp Flex55" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<TextBox2 className="p-profoodsapp TextBox64" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Flex2>
<Flex2 className="p-profoodsapp Flex56" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Image2 className="p-profoodsapp Image48" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
<Carousel1 className="p-profoodsapp Carousel3" {...Carousel3Props} {...Carousel3Cb} {...Carousel3IoProps}/>
<TextBox2 className="p-profoodsapp TextBox65" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
</Flex2>
<Flex2 className="p-profoodsapp Flex57" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<TextBox2 className="p-profoodsapp TextBox66" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<Image2 className="p-profoodsapp Image50" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
</Flex2>
  </>);
}
