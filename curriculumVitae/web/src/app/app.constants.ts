export class Constants {
  // Global Settings
  public static APP_NAME = 'Montrer v0.1';
  public static APP_VERSION = '0.0.1';
  // public static GOOGLE_ANALYTICS_TRACK_ID='UA-33759313-6';
  // public static GOOGLE_MAPS_KEY='12345678';
  public static RECAPTCHA_SITE_KEY = '6LdDx3EUAAAAAAKkjl1euvAJ3cQ2B_Q4Mh5t1ep6';
  public static BASE_URL = '';
  public static UPLOAD_URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

  public static API_METHOD_BANNERS = '/banners';
  public static API_METHOD_CARS = '/vehicles';
  public static API_METHOD_BRANDS = '/brands';

  public static API_METHOD_MAIL_SEND = '/mail/send';
  public static API_METHOD_MAIL_CONTACT = '/mails/contact';

  public static API_METHOD_MODELS = '/models';
  public static API_METHOD_SUSCRIPTOR = '/suscriptors';

  public static API_METHOD_USERS = '/users';
  public static API_METHOD_CAUTIONS = '/cautions';
  public static API_METHOD_POLICIES = '/policies';
  public static API_METHOD_DIRECTORS = '/directors';

  public static PROGRESS = {
    'enterprise': '',
    'cost': '',
    'expenditure': '',
    'type': '', // home form control
    'amountNumber': '', // home form control
    'amount': '', // home form control
    'capitalSocial': '', // for DYG
    'socios': '', // for DYG
    'name': '',
    'phone': '',
    'email': ''
  };

  public static USER_STORAGE = 'CAUCIONAR_USER';

  public static ACTUAL_USER = '';
  public static USER_ACTIVE = false;
  public static ACTUAL_CAUTION = '';
  public static ACTUAL_CAUTION_DYG = [];
  public static ACTUAL_ADUANA = ' - ';
  public static ACTUAL_DNI = '';
  public static NOSIS_RESPONSE_OK = true;

  ///
  public static fromHome = false;

}
