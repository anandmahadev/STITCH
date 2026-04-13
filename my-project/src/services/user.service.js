import {get } from "./api";

export function getUser(id) {
    return get(`/users/${id}`);
}