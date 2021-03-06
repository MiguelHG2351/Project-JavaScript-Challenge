import { useState } from "react";
import Link from "next/link";
import { Header, HeaderContainer, HeaderLeft, HeaderRight } from "./styles";
import { useSession } from "next-auth/react";
import Menu from "@mui/material/Menu";
import { Button, Tooltip, MenuItem, Avatar, Divider, Link as LinkUI } from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import { Logout } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { signOut } from "next-auth/react"

export default function Header_() {
	const [anchorEl, setAnchorEl] = useState(null);
    const { data: session, status } = useSession();
    console.log(session);

	function closeMenu() {
		setAnchorEl(null);
	}

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

    return (
        <Header>
            <HeaderContainer>
                <Link href='/'>
                    <HeaderLeft>
                        <VectorLogo />
                        <p>LearnDino</p>
                    </HeaderLeft>
                </Link>
                <HeaderRight>
                    {status === "authenticated" ? (
                    <Tooltip title="Profile" onClick={handleClick}>
                        <Button variant="outlined">
                                <img src={session.user.image} alt="" />
                        </Button>
                    </Tooltip>
                    ) : (
                        <Link href="/api/auth/signin">
                            <LinkUI className='signin'>
                                Signin
                            </LinkUI>    
                        </Link>
                    )}
                </HeaderRight>
                <UserMenu reference={anchorEl} closeMenu={closeMenu} />
            </HeaderContainer>
        </Header>
    );
}

function VectorLogo() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 36 32"
            fill="none"
            className="css-1170n61"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                fill="#007FFF"
            ></path>
        </svg>
    );
}

function UserMenu({ reference, closeMenu }) {
    const open = Boolean(reference);
    function toLogout() {
        signOut({ redirect: "/" });
    }

    return (
        <>
            <Menu
                anchorEl={reference}
                open={open}
                onClick={closeMenu}
                onClose={closeMenu}
                title="Profile"
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem>
                    <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={toLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}
