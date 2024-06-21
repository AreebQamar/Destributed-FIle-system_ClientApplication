
import { useEffect, useState } from "react";

import { CiMenuKebab } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import DeleteButton from "./deleteButton";
import RenameButton from "./renameButton";

function MenuList({ fileName, setShowMenu }) {

    return (
        <div className="space-y-2 p-2 bg-slate-800 rounded border">

            <div className="flex justify-end ">
                <div className="hover:cursor-pointer">
                    <IoMdClose onClick={() => setShowMenu(false)} />
                </div>
            </div>
            <div className="space-y-2">
                <RenameButton fileName={fileName}/>
                <DeleteButton fileName={fileName}/>
            </div>
        </div>
    )
}

export default function Menu({ fileName, className }) {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className={className}

        >
            {
                showMenu === false ?
                    <div className="hover:cursor-pointer hover:text-xl"
                        onClick={() => setShowMenu(!showMenu)}>
                        <CiMenuKebab />
                    </div>
                    :
                    <MenuList fileName={fileName} setShowMenu={setShowMenu} />
            }
        </div>
    )
}