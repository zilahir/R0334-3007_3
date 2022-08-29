import { ReactElement } from "react";
import Layout from "../../components/common/Layout";
import Header from "./components/Header";

const Compose = (): ReactElement => (
    <Layout
        headerTitle="New message"
        customHeader={<Header />}
    >
        <div>
            <p>
                new message
            </p>
        </div>
    </Layout>
)

export default Compose