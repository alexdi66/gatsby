import React from 'react'
import Link from 'gatsby-link'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <div>
    <h1>Hi HI figa people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Button color="danger">Danger!</Button>
  </div>
)

export default IndexPage
