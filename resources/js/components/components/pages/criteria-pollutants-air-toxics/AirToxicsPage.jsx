import PageScaffold from "../../scaffold/PageScaffold";
import DocumentLinks from "../../documents-links/DocumentLinks";

const AirToxicsPage = () => {
    return (
        <>
            <PageScaffold
                headline='Air Toxics'
                mainText='Placeholder'
            />
            <DocumentLinks docFilter="air_toxics"/>
        </>
    )
}

export default AirToxicsPage;