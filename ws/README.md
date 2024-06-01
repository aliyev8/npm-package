# Introduction

A simple mobile header for React projects

# Installation

```npm install react-simple-mobile-header```

# Usage Example

```js
import { MobileHeader } from "react-simple-mobile-header";
```

```js
<MobileHeader 
    styles={{color:'#000'}}
    logoElement={<a href="/">logo</a>}
    menuElement={<Menu />}
    closeElement={<Button />}
    isOpen={isOpen}
    className="header"
    menuClassName="menu"
      />
```

# Demo

[Codesandbox](https://codesandbox.io/p/sandbox/react-simple-mobile-header-fdxhs4)