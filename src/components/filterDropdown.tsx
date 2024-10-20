import * as React from "react";
import { Dropdown, DropdownItem } from "react-bootstrap";

export function FilterDropdown () {
    return (
        <Dropdown>
            <Dropdown.Menu>
                <DropdownItem>filter</DropdownItem>
            </Dropdown.Menu>
        </Dropdown>
    );    
}

export default FilterDropdown;