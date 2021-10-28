import React from "react";
import { motion } from "framer-motion";

import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const HeaderLayout = () => {
    return (
        <>
            <div>
                <Header />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                >
                    <Outlet />
                </motion.div>
            </div>
        </>
    );
};