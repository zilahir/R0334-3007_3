import { ReactElement } from "react";
import Layout from "../../components/common/Layout";
import Header from "./components/Header";

const Compose = (): ReactElement => (
    <Layout
        headerTitle="New message"
        customHeader={<Header />}
    >
        <div style={{
            padding: 20
        }}>
            <p>
                to
            </p>
            <p>
                from
            </p>
            <p>
                subject
            </p>
            <p>
                message
            </p>
        </div>
    </Layout>
)

export default Compose