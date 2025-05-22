import {test as base} from '@playwright/test';
import {setupInterceptors} from './utils/interceptors';
import {HomePage} from './pages/home.page';
import {SearchPage} from './pages/search.page';
import {CoursePage} from './pages/course.page';
import {TopicLearnPage} from "./pages/topic-learn.page";
import {LoginModal} from "./elements/login.modal";
import {LoginPage} from "./pages/login.page";


type Fixtures = {
    interceptPopups: void;
    homePage: HomePage;
    searchPage: SearchPage;
    coursePage: CoursePage;
    topicLearnPage: TopicLearnPage;
    loginModal: LoginModal;
    loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
    interceptPopups: [async ({ page }, use) => {
        await setupInterceptors(page);
        await use(undefined);
    }, { auto: true }],
    homePage: async ({page}, use) => await use(new HomePage(page)),
    searchPage: async ({page}, use) => await use(new SearchPage(page)),
    coursePage: async ({page}, use) => await use(new CoursePage(page)),
    topicLearnPage: async ({page}, use) => await use(new TopicLearnPage(page)),
    loginModal: async ({page}, use) => await use(new LoginModal(page)),
    loginPage: async ({page}, use) => await use(new LoginPage(page)),
});
