import {expect, test, request} from '@playwright/test';
import pageTexts from '../shared/ggp-translations.json'

const getLocalizedData = (pageData: Record<string, any>, language?: string) => {
  const selectedLanguage = (language ?? process.env.GGP_LANG) ?? 'en';
  return pageData[selectedLanguage];
};

const baseURL = process.env.GGP_ENV == 'STAGE' ? process.env.GGP_URL_STAGE : process.env.GGP_URL_PROD;
const selectedLanguage = process.env.GGP_LANG;
const localizedPageData = getLocalizedData(pageTexts);

test('Check all texts are present on the page', async ({page}) => {
  await page.goto(`${baseURL}/${selectedLanguage}`);

  //header
  await expect.soft(page.getByRole("button", {name: localizedPageData.header.features})).toBeVisible();
  await expect.soft(page.getByRole("button", {name: localizedPageData.header.overview})).toBeVisible();

  //body
  await expect.soft(page.getByText(localizedPageData.cryptoWealthCitadel)).toBeVisible();
  await expect.soft(page.getByText(localizedPageData.cryptoWealthCitadelDescription)).toBeVisible();

  const cryptoWealthCitadelFirstWord = localizedPageData.cryptoWealthCitadel.split(' ')[0];
  let appsTexts = await page.locator(`//*[starts-with(text(), '${cryptoWealthCitadelFirstWord}')]/../..//button/p`).allTextContents();
  expect.soft(appsTexts).toEqual(Object.values(localizedPageData.apps));

  await expect.soft(page.getByText(localizedPageData.allYourCryptoInOneApp)).toBeVisible();
  await expect.soft(page.getByText(localizedPageData.allYourCryptoInOneAppDescription1)).toBeVisible();
  await expect.soft(page.getByText(localizedPageData.allYourCryptoInOneAppDescription2)).toBeVisible();
  await expect.soft(page.getByText(localizedPageData.allYourCryptoInOneAppDescription3)).toBeVisible();

  await expect.soft(page.getByText(localizedPageData.buySellAndTrade)).toBeVisible();
  await expect.soft(page.getByText(localizedPageData.buySellAndTradeDescription)).toBeVisible();

  await expect.soft(page.getByText(localizedPageData.securelyStoreNFTs)).toBeVisible();
  await expect.soft(page.getByText(localizedPageData.securelyStoreNFTsDescription)).toBeVisible();

  await expect.soft(page.getByText(localizedPageData.stakeAndEarn)).toBeVisible();
  await expect.soft(page.getByText(localizedPageData.stakeAndEarnDescription)).toBeVisible();

  await expect.soft(page.getByText(localizedPageData.multilingualWallet)).toBeVisible();
  await expect.soft(page.locator('li span').getByText(localizedPageData.multilingualWalletItems.english)).toBeVisible();
  await expect.soft(page.locator('li span').getByText(localizedPageData.multilingualWalletItems.russian)).toBeVisible();
  await expect.soft(page.locator('li span').getByText(localizedPageData.multilingualWalletItems.turkish)).toBeVisible();
  await expect.soft(page.locator('li span').getByText(localizedPageData.multilingualWalletItems.chinese)).toBeVisible();
  await expect.soft(page.locator('li span').getByText(localizedPageData.multilingualWalletItems.korean)).toBeVisible();
  await expect.soft(page.locator('li span').getByText(localizedPageData.multilingualWalletItems.french)).toBeVisible();
  await expect.soft(page.locator('li span').getByText(localizedPageData.multilingualWalletItems.portuguese)).toBeVisible();
  await expect.soft(page.locator('li span').getByText(localizedPageData.multilingualWalletItems.spanish)).toBeVisible();
  await expect.soft(page.locator('li span').getByText(localizedPageData.multilingualWalletItems.german)).toBeVisible();

  await expect.soft(page.getByText(localizedPageData.allFeaturesInOneApp)).toBeVisible();
  await expect.soft(page.locator('li').getByText(localizedPageData.takeChargeOfYourCrypto)).toBeVisible();
  await expect.soft(page.locator('li').getByText(localizedPageData.takeChargeOfYourCryptoDescription)).toBeVisible();
  await expect.soft(page.locator('li').getByText(localizedPageData.dexAggregator)).toBeVisible();
  await expect.soft(page.locator('li').getByText(localizedPageData.dexAggregatorDescription)).toBeVisible();
  await expect.soft(page.locator('li').getByText(localizedPageData.communityVoting)).toBeVisible();
  await expect.soft(page.locator('li').getByText(localizedPageData.communityVotingDescription)).toBeVisible();
  await expect.soft(page.locator('li').getByText(localizedPageData.walletConnect)).toBeVisible();
  await expect.soft(page.locator('li').getByText(localizedPageData.walletConnectDescription)).toBeVisible();

  await expect.soft(page.getByText(localizedPageData.effortlessSecurity)).toBeVisible();
  await expect.soft(page.getByText(localizedPageData.effortlessSecurityDescription)).toBeVisible();

  await expect.soft(page.getByText(localizedPageData.coinsSupported)).toBeVisible();
  const coinsTexts = await page.getByText(localizedPageData.coinsSupported).locator('../ul/li').allTextContents();
  expect.soft(coinsTexts).toEqual(Object.values(localizedPageData.coinsSupportedItems));

  const [firstWord, secondWord] = localizedPageData.experiencedPlanet9Team.split(' ').slice(0, 2);
  const prefix = `${firstWord} ${secondWord}`;

  const teamLocator = page.locator(`//*[starts-with(text(), "${prefix}")]/../..//ul/li/div/p`);

  const teamTexts = await teamLocator.allTextContents();

  expect.soft(teamTexts).toEqual(Object.values(localizedPageData.team));

  await expect.soft(page.getByText(localizedPageData.downloadToAccess)).toBeVisible();
  if (selectedLanguage === "en") {
    await expect.soft(page.getByText(localizedPageData.allOfWeb3WithJustOneApp)).toBeVisible();
  }
  appsTexts = await page.getByText(localizedPageData.downloadToAccess).locator('//../..//button/p').allTextContents();
  // appsTexts = await page.locator(`//*[starts-with(text(), '${localizedPageData.downloadToAccess}')]/../..//button/p`).allTextContents();
  expect.soft(appsTexts).toEqual(Object.values(localizedPageData.apps));

  // footer
  const countriesTexts = await page.locator('footer address p').allTextContents();
  expect.soft(countriesTexts).toEqual([localizedPageData.contacts.europe, localizedPageData.contacts.usa]);
  const addressesTexts = await page.locator('footer address a').allTextContents();
  expect.soft(addressesTexts).toEqual([localizedPageData.contacts.europeAddress, localizedPageData.contacts.usaAddress]);

  await expect.soft(page.getByText(localizedPageData.downloadToAccess)).toBeVisible();
  const dataProtectionPolicyLinks = await page.getByText(localizedPageData.dataProtectionPolicy).count();
  expect.soft(dataProtectionPolicyLinks).toBe(2);
  const privacyPolicyLinks = await page.getByText(localizedPageData.privacyPolicy).count();
  expect.soft(privacyPolicyLinks).toBe(2);
  await expect.soft(page.getByText(localizedPageData.planet9GroupCorporation)).toBeVisible();
  await expect.soft(page.getByText(localizedPageData.finCEN)).toBeVisible();
  await expect.soft(page.getByText(localizedPageData.developedByTheFirstStudios)).toBeVisible();
});
