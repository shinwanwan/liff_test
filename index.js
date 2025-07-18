const liffId = "2007752050-JX5pRvrz";

async function main() {
    await liff.init({ liffId });

    if (!liff.isLoggedIn()) {
        liff.login();
        return;
    }

    const profile = await liff.getProfile();
    document.getElementById("userId").innerText = `User ID: ${profile.userId}`;
    document.getElementById("userName").innerText = `User Name: ${profile.displayName}`;
}

function closeLiff() {
    liff.closeWindow();
}

main();