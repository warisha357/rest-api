module.exports = (sequelize, Sequelize) => {
    const Apptfile = sequelize.define('Apptfile', {
      DOCTOR_ID: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      SITE_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      APPOINTMENT_DATE: {
        type: Sequelize.DATE,
        allowNull: false
      },
      APPOINTMENT_TYPE: {
        type: Sequelize.CHAR(1),
        allowNull: true
      },
      MRNO: {
        type: Sequelize.STRING(8),
        allowNull: true
      },
      PAT_NAME: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      SPECIALITY_ID: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      DEPT_ID: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      USER_NAME: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      SYSTEM_DATE: {
        type: Sequelize.DATE,
        allowNull: false
      },
      APPTEDITDATE: {
        type: Sequelize.DATE,
        allowNull: true
      },
      LOCATION: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      APT_TIME: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      APPTEDITUSER: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      APPTEDITLOCATION: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      APPTEDITSITE: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      APPTEDITDEPT_ID: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      SCHEDULE_ID: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      SYSTEM_TIME: {
        type: Sequelize.STRING(8),
        allowNull: true
      },
      REMARKS: {
        type: Sequelize.STRING(250),
        allowNull: true
      },
      CONTACT_1: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      CONTACT_2: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      CONTACT_3: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      CONTACT_4: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      BLOCK_REASON: {
        type: Sequelize.STRING(60),
        allowNull: true
      },
      START_APT_TIME: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      END_APT_TIME: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      SLOT_PERIOD: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      APPT_DESC: {
        type: Sequelize.STRING(12),
        allowNull: true
      },
      APPT_STATUS: {
        type: Sequelize.STRING(2),
        allowNull: true
      },
      CONFIRMATION_REMARKS: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      CONFIRMED_BY: {
        type: Sequelize.STRING(35),
        allowNull: true
      },
      CONFIRMED_DATE: {
        type: Sequelize.DATE,
        allowNull: true
      },
      CONFIRMED_TIME: {
        type: Sequelize.STRING(12),
        allowNull: true
      },
      MR_EXIST: {
        type: Sequelize.STRING(2),
        allowNull: true
      },
      APPT_EMAIL: {
        type: Sequelize.STRING(1),
        allowNull: true
      },
      DOC_REMARKS: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      APPT_CANCEL_LOC: {
        type: Sequelize.STRING(60),
        allowNull: true
      },
      CANCELLATION_COMMENTS: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      ENDO_PROC: {
        type: Sequelize.STRING(300),
        allowNull: true
      },
      ENDO_DOC: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      VISIT_TYPE: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      OLD_APPT_TYPE: {
        type: Sequelize.STRING(1),
        allowNull: true
      },
      UPDATE_MR_BY: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      UPDATE_MR_AT: {
        type: Sequelize.DATE,
        allowNull: true
      },
      UPDATE_MR_LOCATION: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      IS_BLOCKED: {
        type: Sequelize.STRING(1),
        allowNull: true
      },
      BLOCK_BY: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      BLOCK_DATE: {
        type: Sequelize.DATE,
        allowNull: true
      },
      ENABLED_BY: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      ENABLED_DATE: {
        type: Sequelize.DATE,
        allowNull: true
      },
      FOR_SITE: {
        type: Sequelize.STRING(5),
        allowNull: true
      },
      P_GENDER: {
        type: Sequelize.STRING(6),
        allowNull: true
      },
      P_AGE: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      APPOINTMENT: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      APPT: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      WEB_APPT_ID: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      BOOKING_DATE: {
        type: Sequelize.DATE,
        allowNull: false
      },
      APPOINTMENT_DATETIME: {
        type: Sequelize.DATE,
        allowNull: true
      },
      ARRIVAL_MODE: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      WALKIN_TIME: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      ECONS_FLAG: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      IS_CHARGED: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      GROUP_APPT: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      PLATFORM: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      W_SLOT_PERIOD: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      REF_INVOICE_ID: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    }, {
      tableName: 'appointments',
      timestamps: false
    });
  
    return Apptfile;
  };
  
  