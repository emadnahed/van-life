## Frequently Asked Questions (FAQ)

### What is the primary reason to use a nested route?

Nested routes are used when there is a common user interface utilized across multiple routes within our application.

### What is a "Layout Route"?

A "Layout Route" serves as the parent route for routes nested within, ensuring the preferred portion of the user interface that will be shared. It utilizes an Outlet component.


### What does the `<Outlet/>` component do? When do you use it?

The Outlet component ensures that the routes nested within a parent (with layout) are rendered as children.

`import { Outlet } from "react-router-dom"`

### What is an "Index Route"?

An "Index Route" is a pathless route indexed to serve as the default landing page upon routing to the parent route. The element will be rendered as the outlet child prop in the layout.
