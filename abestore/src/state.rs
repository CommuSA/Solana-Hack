use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    program_pack::{IsInitialized, Sealed},
    pubkey::Pubkey,
};
use crate::abe::*;

#[cfg(not(feature = "borsh"))]
use serde::{Serialize, Deserialize};
#[cfg(feature = "borsh")]
use borsh::{BorshSerialize, BorshDeserialize};


#[derive(Clone, PartialEq, Debug)]
#[cfg_attr(feature = "borsh", derive(BorshSerialize, BorshDeserialize))]
#[cfg_attr(not(feature = "borsh"), derive(Serialize, Deserialize))]
pub struct StuffInfo {
    pub discriminator: String,
    pub is_initialized: bool,
    pub public_key: Ac17PublicKey,
    pub secret_key: String,
    pub master_key: String,
    pub name: String,
    pub msg: String,
}

#[derive(BorshSerialize, BorshDeserialize)]
pub struct ReplyCounter {
    pub discriminator: String,
    pub is_initialized: bool,
    pub counter: u8,
}

#[derive(BorshSerialize, BorshDeserialize)]
pub struct Reply {
    pub discriminator: String,
    pub is_initialized: bool,
    pub stuffinfo: Pubkey,
    pub reply: String,
}

impl Sealed for StuffInfo {}

impl IsInitialized for StuffInfo {
    fn is_initialized(&self) -> bool {
        self.is_initialized
    }
}

impl IsInitialized for ReplyCounter {
    fn is_initialized(&self) -> bool {
        self.is_initialized
    }
}

impl IsInitialized for Reply {
    fn is_initialized(&self) -> bool {
        self.is_initialized
    }
}


// impl ToString for Ac17PublicKey {
//     fn to_string(&self) -> String {
//         format!("Ac17PublicKey {{ _g: {:?}, _h_a: {:?}, _e_gh_ka: {:?} }}", self._g, self._h_a, self._e_gh_ka)
//     }
// }