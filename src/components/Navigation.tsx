import { Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { MenuItemStoryblok, NavigationStoryblok } from "../interfaces/component-types-sb";

const Navigation = ({ blok }: { blok: NavigationStoryblok | null }) => {
    const renderDrowpdownButton = (item: MenuItemStoryblok) => (
        <DropdownButton
            title={item.title}
            drop='end'
            variant='Secondary'
            key={item._uid}
        >
            {item?.submenu_item?.map(item => <Dropdown.Item href={`/${item?.link?.cached_url}`} key={item._uid}>{item.title}</Dropdown.Item>)}
        </DropdownButton>
    );

    const renderNavigationDropDown = (item: MenuItemStoryblok) => {
        return (
            <NavDropdown
                title={item.title}
                id="basic-nav-dropdown"
                key={item._uid}>
                {
                    item?.submenu_item?.map((subitem) => {
                        if (subitem.submenu_item && subitem.submenu_item.length >= 1) {
                            return renderDrowpdownButton(subitem);
                        }

                        return (
                            <NavDropdown.Item href={`/${subitem.link?.cached_url}`} key={subitem._uid}>
                                {subitem.title}
                            </NavDropdown.Item>
                        );
                    })
                }
            </NavDropdown >
        );
    }

    const renderNavigationItems = () => {
        const items = blok?.menu_item?.map((item) => {
            if (item.submenu_item && item.submenu_item.length >= 1) {
                return renderNavigationDropDown(item);
            }

            return <Nav.Link href={`/${item.link?.cached_url}`} key={item._uid}>{item.title}</Nav.Link>;
        });

        return items;
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">{blok?.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {renderNavigationItems()}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;