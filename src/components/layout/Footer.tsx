import { Waves } from "../canvas"

const Footer =  () => {

    return (
        <footer className='relative flex h-screen bg-gradient-to-t from-[#283E51] to-transparent snap-center'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-80'>
              <div className='[--gradient-length:10] [--gradient-interval-size:3] GradientProvider' style={{ "--gradient-progress": 1 } as React.CSSProperties}>
                <h1 className='flex flex-col font-black text-transparent bg-clip-text leading-[1.2] [--font-scale:0.30] sm:[--font-scale:0.130] lg:[--font-scale:0.100] SectionHello GradientProvider_Diagonal'>
                  <span>Whats your sine?</span>
                </h1>
              </div>
            </div>
            <Waves pointSize={15} distance={5} speed={1.7} height={4} />
          </footer>
    )
}

export default Footer