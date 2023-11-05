

const Gallery = () => {
    return (
        <div className="max-w-screen-xl mx-auto md:px-10">
            <div>
                <h3 className="text-center font-bold text-3xl mb-10">Our Gallery</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/9gsH0Tc/burger.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/YPJv7xY/pixzolo-photography-ZB8-NK8c-B4-EE-unsplash.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/9tWMf4j/sebastian-coman-photography-rw-BJa-Jdes-Gg-unsplash.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/CPfFv3d/hybrid-storytellers-n5ar-EY-Dix-U-unsplash.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/MSFt3RH/amie-watson-2h-BUvhe81m-U-unsplash.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/YfkMgFw/brooke-lark-p-GM4sjt-Bd-Q-unsplash.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/dbQq86L/ball-park-brand-Lntnns1-YBEY-unsplash.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/WtKr79Z/aleisha-kalina-Xqsf-Gjt-B0x-E-unsplash.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/tKTSWxv/creative-headline-F10n-THk-Ci-W8-unsplash.jpg" alt=""/>
                </div>

            </div>

        </div>
    );
};

export default Gallery;