/*
 * Copyright (C) 2017 Nethesis S.r.l.
 * http://www.nethesis.it - nethserver@nethesis.it
 *
 * This script is part of NethServer.
 *
 * NethServer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License,
 * or any later version.
 *
 * NethServer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with NethServer.  If not, see COPYING.
 */

/**
 * Namespace definition
 *
 *
 * @namespace nethserver.system.disks
 */
(function(ns){
    // Avoid double-inclusion from sub frames
    if(ns.system.disks) {
        return;
    }
    ns.system.disks = {
        /**
         * Retrieve the json data in /var/cache/duc/duc.json
         * @return {Promise} from cockpit.file
         */
        getJSONUsage: function () {
            var fh = cockpit.file("/var/cache/duc/duc.json", {
                syntax: nethserver.syntax.trimWhitespace
            });
            return fh.read().always(function () {
                fh.close();
            });
        },
        /**
         * Get date of last updated of disk usage
         * @return {Promise} from cockpit.file
         */
        getUpdatedUsage: function () {
            return cockpit.spawn(['date', '+%F %H:%M']);
        },
        /**
         * Launch update of disk usage using duc
         * @return {Promise} from cockpit.file with json data and updated time
         */
        updateJSONUsage: function () {
            return cockpit.spawn(['date', '+%F %H:%M']);
        },
    };
})(nethserver);