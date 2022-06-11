import PageScaffold from "../../scaffold/PageScaffold";
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";
import DocumentLinks from "../../documents-links/DocumentLinks";

const CamnetPage = () => {
    return (
        <>
            <PageScaffold
                heroImage="/assets/images/stock/camnet.jpg"
                headline="CAMNET"
                mainText="CAMNET is a network of web cameras intended to raise public awareness about the effects of air pollution on visibility. Typical visual range in the eastern U.S. is 15 to 30 miles, one-third of what it would be without man-made air pollution."
            />
            <div style={{textAlign: 'center'}}>
                <a href="https://hazecam.net/" target="_blank">CAMNET Website</a>
            </div>
            <DocumentLinks docFilter="camnet"/>
            <ResourceLibraryLink docFilter="camnet"/>
        </>
    );
};

export default CamnetPage;
