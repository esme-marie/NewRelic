import InstagramEmbed from "react-instagram-embed";
import React from "react";
import { CardColumns, Card } from "react-bootstrap";


class InstaLinks extends React.Component {
  render() {
    // <h1>Mini Sustainable Market, Follow sustainable instashops! </h1>
    return (
       
        <CardColumns>
          <Card style={{ width: 300 }}>
              <InstagramEmbed
                url="https://www.instagram.com/p/CKwLtKjscKh/?utm_source=ig_web_copy_link"
                clientAccessToken="897186484376035|9a105f16fb35c9aff3fccf8286532814"
                Width={300}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            <Card.Body>
              Testing CSS
            </Card.Body>
          </Card>
            
          {/* <Card style={{ width: '18rem' }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/CKwLtKjscKh/?utm_source=ig_web_copy_link"
              clientAccessToken="897186484376035|9a105f16fb35c9aff3fccf8286532814"
              Width={300}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Card>
          <Card style={{ width: '18rem' }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/CLmM46-FN9L/?utm_source=ig_web_copy_link"
              clientAccessToken="897186484376035|9a105f16fb35c9aff3fccf8286532814"
              maxWidth={500}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Card>
          <Card style={{ width: '18rem' }}>
          <InstagramEmbed
              url="https://www.instagram.com/p/CEvno6eJ8hJ/?utm_source=ig_web_copy_link"
              clientAccessToken="897186484376035|9a105f16fb35c9aff3fccf8286532814"
              maxWidth={500}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Card>
          <Card style={{ width: '18rem' }}>
          <InstagramEmbed
              url="https://www.instagram.com/p/BvyM3vGpPsb/?utm_source=ig_web_copy_link"
              clientAccessToken="897186484376035|9a105f16fb35c9aff3fccf8286532814"
              maxWidth={500}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Card>
          <Card style={{ width: '18rem' }}>
          <InstagramEmbed
              url="https://www.instagram.com/p/CInNr-mJ3P1/?utm_source=ig_web_copy_link"
              clientAccessToken="897186484376035|9a105f16fb35c9aff3fccf8286532814"
              maxWidth={500}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Card>
          <Card style={{ width: '18rem' }}>
          <InstagramEmbed
              url="https://www.instagram.com/p/CIzjMXGJQ6r/?utm_source=ig_web_copy_link"
              clientAccessToken="897186484376035|9a105f16fb35c9aff3fccf8286532814"
              maxWidth={500}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Card>
          <Card style={{ width: '18rem' }}>
          <InstagramEmbed
              url=" https://www.instagram.com/p/CHMwOUBJRg7/?utm_source=ig_web_copy_link"
              clientAccessToken="897186484376035|9a105f16fb35c9aff3fccf8286532814"
              maxWidth={150}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Card>
          <Card style={{ width: '18rem' }}>
          <InstagramEmbed
              url="https://www.instagram.com/p/CKWLZS_JM6-/?utm_source=ig_web_copy_link"
              clientAccessToken="897186484376035|9a105f16fb35c9aff3fccf8286532814"
              maxWidth={150}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Card>
          <Card style={{ width: '18rem' }}>
          <InstagramEmbed
              url="https://www.instagram.com/p/B5-WR66pKVN/?utm_source=ig_web_copy_link"
              clientAccessToken="897186484376035|9a105f16fb35c9aff3fccf8286532814"
              maxWidth={150}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Card>
          <Card style={{ width: '18rem' }}>
          <InstagramEmbed
              url="https://www.instagram.com/p/B-ZPdvzJj0K/?utm_source=ig_web_copy_link"
              clientAccessToken="897186484376035|9a105f16fb35c9aff3fccf8286532814"
              maxWidth={150}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Card> */}

      </CardColumns>
      
    )
  }
}

export default InstaLinks;
