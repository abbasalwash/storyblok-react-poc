import { getStoryblokApi, ISbStoriesParams, StoryblokClient } from "@storyblok/react";
import { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
    useEffect(() => {
        const fetchData = () => {
            let sbParams: ISbStoriesParams = { version: "draft" };
            const storyblokApi: StoryblokClient = getStoryblokApi();
            storyblokApi
                .get(`cdn/stories`, sbParams)
                .then((res) => console.log(res))
                .catch((error) => console.error(error));
        };

        fetchData();
    }, []);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">X Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <NavDropdown title="Projecten" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/projects">Alle projecten</NavDropdown.Item>
                            <NavDropdown.Item href="/projects/porject-a">Project A</NavDropdown.Item>
                            <NavDropdown.Item href="/projects/project-b">Project B</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;