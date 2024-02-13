#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

module_manifest!();

pub fn main() {}

static mut GLOBAL_VEC: *mut Vec<i32> = std::ptr::null_mut();

fn init_global_vec() {
    unsafe {
        GLOBAL_VEC = Box::into_raw(Box::new(Vec::new()));
    }
}

#[marine]
fn writeMetadata(values: Vec<i32>) {
    unsafe {
        // Check if the global vector has been initialized
        if GLOBAL_VEC.is_null() {
            init_global_vec();
        }
        (*GLOBAL_VEC).clear();
        (*GLOBAL_VEC).extend_from_slice(&values);
    }
}

#[marine]
fn readMetadata() -> Vec<i32> {
    unsafe {
        // Assuming the vector has been initialized, otherwise this would be a null dereference!
        if GLOBAL_VEC.is_null() {
            Vec::new() // return an empty vector or handle as needed
        } else {
            (*GLOBAL_VEC).clone()
        }
    }
}