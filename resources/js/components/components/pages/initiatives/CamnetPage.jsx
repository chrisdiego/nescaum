import PageScaffold from "../../scaffold/PageScaffold";
import DocumentLinks from "../../documents-links/DocumentLinks";

const CamnetPage = () => {
    return (
        <>
            <PageScaffold
                heroImage="/assets/images/stock/camnet.jpg"
                headline="CAMNET"
                mainText="CAMNET is a network of web cameras intended to raise public awareness about the effects of air pollution on visibility. Typical visual range in the eastern U.S. is 15 to 30 miles, one-third of what it would be without man-made air pollution."
            />
            <DocumentLinks docFilter="camnet"/>
        </>
    );
};

export default CamnetPage;
