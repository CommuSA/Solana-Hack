use borsh::{BorshDeserialize, BorshSerialize};
use rabe::schemes::ac17::{Ac17MasterKey, Ac17PublicKey, Ac17SecretKey};
use solana_program::{
    program_pack::{IsInitialized, Sealed},
    pubkey::Pubkey,
};

#[derive(Clone, PartialEq, Debug, BorshSerialize, BorshDeserialize)]
pub struct StuffInfo {
    pub discriminator: String,
    pub is_initialized: bool,
    pub public_key: Ac17PublicKey,
    pub secret_key: Ac17SecretKey,
    pub master_key: Ac17MasterKey,
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
