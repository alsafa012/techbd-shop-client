import { Helmet } from "react-helmet-async";

const WebsiteTitle = ({ title }) => {
     return (
          <div>
               <Helmet>
                    <meta charSet="utf-8" />
                    <title>{title}</title>
               </Helmet>
          </div>
     );
};

export default WebsiteTitle;
