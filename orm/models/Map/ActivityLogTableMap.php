<?php

namespace Map;

use \ActivityLog;
use \ActivityLogQuery;
use Propel\Runtime\Propel;
use Propel\Runtime\ActiveQuery\Criteria;
use Propel\Runtime\ActiveQuery\InstancePoolTrait;
use Propel\Runtime\Connection\ConnectionInterface;
use Propel\Runtime\DataFetcher\DataFetcherInterface;
use Propel\Runtime\Exception\PropelException;
use Propel\Runtime\Map\RelationMap;
use Propel\Runtime\Map\TableMap;
use Propel\Runtime\Map\TableMapTrait;


/**
 * This class defines the structure of the 'activity_log' table.
 *
 *
 *
 * This map class is used by Propel to do runtime db structure discovery.
 * For example, the createSelectSql() method checks the type of a given column used in an
 * ORDER BY clause to know whether it needs to apply SQL to make the ORDER BY case-insensitive
 * (i.e. if it's a text column type).
 *
 */
class ActivityLogTableMap extends TableMap
{
    use InstancePoolTrait;
    use TableMapTrait;

    /**
     * The (dot-path) name of this class
     */
    const CLASS_NAME = '.Map.ActivityLogTableMap';

    /**
     * The default database name for this class
     */
    const DATABASE_NAME = 'default';

    /**
     * The table name for this class
     */
    const TABLE_NAME = 'activity_log';

    /**
     * The related Propel class for this table
     */
    const OM_CLASS = '\\ActivityLog';

    /**
     * A class that can be returned by this tableMap
     */
    const CLASS_DEFAULT = 'ActivityLog';

    /**
     * The total number of columns
     */
    const NUM_COLUMNS = 6;

    /**
     * The number of lazy-loaded columns
     */
    const NUM_LAZY_LOAD_COLUMNS = 0;

    /**
     * The number of columns to hydrate (NUM_COLUMNS - NUM_LAZY_LOAD_COLUMNS)
     */
    const NUM_HYDRATE_COLUMNS = 6;

    /**
     * the column name for the log_id field
     */
    const COL_LOG_ID = 'activity_log.log_id';

    /**
     * the column name for the start_time field
     */
    const COL_START_TIME = 'activity_log.start_time';

    /**
     * the column name for the end_time field
     */
    const COL_END_TIME = 'activity_log.end_time';

    /**
     * the column name for the activity field
     */
    const COL_ACTIVITY = 'activity_log.activity';

    /**
     * the column name for the object_id field
     */
    const COL_OBJECT_ID = 'activity_log.object_id';

    /**
     * the column name for the api_pages field
     */
    const COL_API_PAGES = 'activity_log.api_pages';

    /**
     * The default string format for model objects of the related table
     */
    const DEFAULT_STRING_FORMAT = 'YAML';

    /**
     * holds an array of fieldnames
     *
     * first dimension keys are the type constants
     * e.g. self::$fieldNames[self::TYPE_PHPNAME][0] = 'Id'
     */
    protected static $fieldNames = array (
        self::TYPE_PHPNAME       => array('LogId', 'StartTime', 'EndTime', 'Activity', 'ObjectId', 'ApiPages', ),
        self::TYPE_CAMELNAME     => array('logId', 'startTime', 'endTime', 'activity', 'objectId', 'apiPages', ),
        self::TYPE_COLNAME       => array(ActivityLogTableMap::COL_LOG_ID, ActivityLogTableMap::COL_START_TIME, ActivityLogTableMap::COL_END_TIME, ActivityLogTableMap::COL_ACTIVITY, ActivityLogTableMap::COL_OBJECT_ID, ActivityLogTableMap::COL_API_PAGES, ),
        self::TYPE_FIELDNAME     => array('log_id', 'start_time', 'end_time', 'activity', 'object_id', 'api_pages', ),
        self::TYPE_NUM           => array(0, 1, 2, 3, 4, 5, )
    );

    /**
     * holds an array of keys for quick access to the fieldnames array
     *
     * first dimension keys are the type constants
     * e.g. self::$fieldKeys[self::TYPE_PHPNAME]['Id'] = 0
     */
    protected static $fieldKeys = array (
        self::TYPE_PHPNAME       => array('LogId' => 0, 'StartTime' => 1, 'EndTime' => 2, 'Activity' => 3, 'ObjectId' => 4, 'ApiPages' => 5, ),
        self::TYPE_CAMELNAME     => array('logId' => 0, 'startTime' => 1, 'endTime' => 2, 'activity' => 3, 'objectId' => 4, 'apiPages' => 5, ),
        self::TYPE_COLNAME       => array(ActivityLogTableMap::COL_LOG_ID => 0, ActivityLogTableMap::COL_START_TIME => 1, ActivityLogTableMap::COL_END_TIME => 2, ActivityLogTableMap::COL_ACTIVITY => 3, ActivityLogTableMap::COL_OBJECT_ID => 4, ActivityLogTableMap::COL_API_PAGES => 5, ),
        self::TYPE_FIELDNAME     => array('log_id' => 0, 'start_time' => 1, 'end_time' => 2, 'activity' => 3, 'object_id' => 4, 'api_pages' => 5, ),
        self::TYPE_NUM           => array(0, 1, 2, 3, 4, 5, )
    );

    /**
     * Initialize the table attributes and columns
     * Relations are not initialized by this method since they are lazy loaded
     *
     * @return void
     * @throws PropelException
     */
    public function initialize()
    {
        // attributes
        $this->setName('activity_log');
        $this->setPhpName('ActivityLog');
        $this->setIdentifierQuoting(false);
        $this->setClassName('\\ActivityLog');
        $this->setPackage('');
        $this->setUseIdGenerator(true);
        // columns
        $this->addPrimaryKey('log_id', 'LogId', 'INTEGER', true, null, null);
        $this->addColumn('start_time', 'StartTime', 'TIMESTAMP', true, null, null);
        $this->addColumn('end_time', 'EndTime', 'TIMESTAMP', true, null, null);
        $this->addColumn('activity', 'Activity', 'VARCHAR', true, 256, null);
        $this->addColumn('object_id', 'ObjectId', 'INTEGER', false, null, null);
        $this->addColumn('api_pages', 'ApiPages', 'INTEGER', false, null, 1);
    } // initialize()

    /**
     * Build the RelationMap objects for this table relationships
     */
    public function buildRelations()
    {
    } // buildRelations()

    /**
     * Retrieves a string version of the primary key from the DB resultset row that can be used to uniquely identify a row in this table.
     *
     * For tables with a single-column primary key, that simple pkey value will be returned.  For tables with
     * a multi-column primary key, a serialize()d version of the primary key will be returned.
     *
     * @param array  $row       resultset row.
     * @param int    $offset    The 0-based offset for reading from the resultset row.
     * @param string $indexType One of the class type constants TableMap::TYPE_PHPNAME, TableMap::TYPE_CAMELNAME
     *                           TableMap::TYPE_COLNAME, TableMap::TYPE_FIELDNAME, TableMap::TYPE_NUM
     *
     * @return string The primary key hash of the row
     */
    public static function getPrimaryKeyHashFromRow($row, $offset = 0, $indexType = TableMap::TYPE_NUM)
    {
        // If the PK cannot be derived from the row, return NULL.
        if ($row[TableMap::TYPE_NUM == $indexType ? 0 + $offset : static::translateFieldName('LogId', TableMap::TYPE_PHPNAME, $indexType)] === null) {
            return null;
        }

        return null === $row[TableMap::TYPE_NUM == $indexType ? 0 + $offset : static::translateFieldName('LogId', TableMap::TYPE_PHPNAME, $indexType)] || is_scalar($row[TableMap::TYPE_NUM == $indexType ? 0 + $offset : static::translateFieldName('LogId', TableMap::TYPE_PHPNAME, $indexType)]) || is_callable([$row[TableMap::TYPE_NUM == $indexType ? 0 + $offset : static::translateFieldName('LogId', TableMap::TYPE_PHPNAME, $indexType)], '__toString']) ? (string) $row[TableMap::TYPE_NUM == $indexType ? 0 + $offset : static::translateFieldName('LogId', TableMap::TYPE_PHPNAME, $indexType)] : $row[TableMap::TYPE_NUM == $indexType ? 0 + $offset : static::translateFieldName('LogId', TableMap::TYPE_PHPNAME, $indexType)];
    }

    /**
     * Retrieves the primary key from the DB resultset row
     * For tables with a single-column primary key, that simple pkey value will be returned.  For tables with
     * a multi-column primary key, an array of the primary key columns will be returned.
     *
     * @param array  $row       resultset row.
     * @param int    $offset    The 0-based offset for reading from the resultset row.
     * @param string $indexType One of the class type constants TableMap::TYPE_PHPNAME, TableMap::TYPE_CAMELNAME
     *                           TableMap::TYPE_COLNAME, TableMap::TYPE_FIELDNAME, TableMap::TYPE_NUM
     *
     * @return mixed The primary key of the row
     */
    public static function getPrimaryKeyFromRow($row, $offset = 0, $indexType = TableMap::TYPE_NUM)
    {
        return (int) $row[
            $indexType == TableMap::TYPE_NUM
                ? 0 + $offset
                : self::translateFieldName('LogId', TableMap::TYPE_PHPNAME, $indexType)
        ];
    }

    /**
     * The class that the tableMap will make instances of.
     *
     * If $withPrefix is true, the returned path
     * uses a dot-path notation which is translated into a path
     * relative to a location on the PHP include_path.
     * (e.g. path.to.MyClass -> 'path/to/MyClass.php')
     *
     * @param boolean $withPrefix Whether or not to return the path with the class name
     * @return string path.to.ClassName
     */
    public static function getOMClass($withPrefix = true)
    {
        return $withPrefix ? ActivityLogTableMap::CLASS_DEFAULT : ActivityLogTableMap::OM_CLASS;
    }

    /**
     * Populates an object of the default type or an object that inherit from the default.
     *
     * @param array  $row       row returned by DataFetcher->fetch().
     * @param int    $offset    The 0-based offset for reading from the resultset row.
     * @param string $indexType The index type of $row. Mostly DataFetcher->getIndexType().
                                 One of the class type constants TableMap::TYPE_PHPNAME, TableMap::TYPE_CAMELNAME
     *                           TableMap::TYPE_COLNAME, TableMap::TYPE_FIELDNAME, TableMap::TYPE_NUM.
     *
     * @throws PropelException Any exceptions caught during processing will be
     *                         rethrown wrapped into a PropelException.
     * @return array           (ActivityLog object, last column rank)
     */
    public static function populateObject($row, $offset = 0, $indexType = TableMap::TYPE_NUM)
    {
        $key = ActivityLogTableMap::getPrimaryKeyHashFromRow($row, $offset, $indexType);
        if (null !== ($obj = ActivityLogTableMap::getInstanceFromPool($key))) {
            // We no longer rehydrate the object, since this can cause data loss.
            // See http://www.propelorm.org/ticket/509
            // $obj->hydrate($row, $offset, true); // rehydrate
            $col = $offset + ActivityLogTableMap::NUM_HYDRATE_COLUMNS;
        } else {
            $cls = ActivityLogTableMap::OM_CLASS;
            /** @var ActivityLog $obj */
            $obj = new $cls();
            $col = $obj->hydrate($row, $offset, false, $indexType);
            ActivityLogTableMap::addInstanceToPool($obj, $key);
        }

        return array($obj, $col);
    }

    /**
     * The returned array will contain objects of the default type or
     * objects that inherit from the default.
     *
     * @param DataFetcherInterface $dataFetcher
     * @return array
     * @throws PropelException Any exceptions caught during processing will be
     *                         rethrown wrapped into a PropelException.
     */
    public static function populateObjects(DataFetcherInterface $dataFetcher)
    {
        $results = array();

        // set the class once to avoid overhead in the loop
        $cls = static::getOMClass(false);
        // populate the object(s)
        while ($row = $dataFetcher->fetch()) {
            $key = ActivityLogTableMap::getPrimaryKeyHashFromRow($row, 0, $dataFetcher->getIndexType());
            if (null !== ($obj = ActivityLogTableMap::getInstanceFromPool($key))) {
                // We no longer rehydrate the object, since this can cause data loss.
                // See http://www.propelorm.org/ticket/509
                // $obj->hydrate($row, 0, true); // rehydrate
                $results[] = $obj;
            } else {
                /** @var ActivityLog $obj */
                $obj = new $cls();
                $obj->hydrate($row);
                $results[] = $obj;
                ActivityLogTableMap::addInstanceToPool($obj, $key);
            } // if key exists
        }

        return $results;
    }
    /**
     * Add all the columns needed to create a new object.
     *
     * Note: any columns that were marked with lazyLoad="true" in the
     * XML schema will not be added to the select list and only loaded
     * on demand.
     *
     * @param Criteria $criteria object containing the columns to add.
     * @param string   $alias    optional table alias
     * @throws PropelException Any exceptions caught during processing will be
     *                         rethrown wrapped into a PropelException.
     */
    public static function addSelectColumns(Criteria $criteria, $alias = null)
    {
        if (null === $alias) {
            $criteria->addSelectColumn(ActivityLogTableMap::COL_LOG_ID);
            $criteria->addSelectColumn(ActivityLogTableMap::COL_START_TIME);
            $criteria->addSelectColumn(ActivityLogTableMap::COL_END_TIME);
            $criteria->addSelectColumn(ActivityLogTableMap::COL_ACTIVITY);
            $criteria->addSelectColumn(ActivityLogTableMap::COL_OBJECT_ID);
            $criteria->addSelectColumn(ActivityLogTableMap::COL_API_PAGES);
        } else {
            $criteria->addSelectColumn($alias . '.log_id');
            $criteria->addSelectColumn($alias . '.start_time');
            $criteria->addSelectColumn($alias . '.end_time');
            $criteria->addSelectColumn($alias . '.activity');
            $criteria->addSelectColumn($alias . '.object_id');
            $criteria->addSelectColumn($alias . '.api_pages');
        }
    }

    /**
     * Returns the TableMap related to this object.
     * This method is not needed for general use but a specific application could have a need.
     * @return TableMap
     * @throws PropelException Any exceptions caught during processing will be
     *                         rethrown wrapped into a PropelException.
     */
    public static function getTableMap()
    {
        return Propel::getServiceContainer()->getDatabaseMap(ActivityLogTableMap::DATABASE_NAME)->getTable(ActivityLogTableMap::TABLE_NAME);
    }

    /**
     * Add a TableMap instance to the database for this tableMap class.
     */
    public static function buildTableMap()
    {
        $dbMap = Propel::getServiceContainer()->getDatabaseMap(ActivityLogTableMap::DATABASE_NAME);
        if (!$dbMap->hasTable(ActivityLogTableMap::TABLE_NAME)) {
            $dbMap->addTableObject(new ActivityLogTableMap());
        }
    }

    /**
     * Performs a DELETE on the database, given a ActivityLog or Criteria object OR a primary key value.
     *
     * @param mixed               $values Criteria or ActivityLog object or primary key or array of primary keys
     *              which is used to create the DELETE statement
     * @param  ConnectionInterface $con the connection to use
     * @return int             The number of affected rows (if supported by underlying database driver).  This includes CASCADE-related rows
     *                         if supported by native driver or if emulated using Propel.
     * @throws PropelException Any exceptions caught during processing will be
     *                         rethrown wrapped into a PropelException.
     */
     public static function doDelete($values, ConnectionInterface $con = null)
     {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getWriteConnection(ActivityLogTableMap::DATABASE_NAME);
        }

        if ($values instanceof Criteria) {
            // rename for clarity
            $criteria = $values;
        } elseif ($values instanceof \ActivityLog) { // it's a model object
            // create criteria based on pk values
            $criteria = $values->buildPkeyCriteria();
        } else { // it's a primary key, or an array of pks
            $criteria = new Criteria(ActivityLogTableMap::DATABASE_NAME);
            $criteria->add(ActivityLogTableMap::COL_LOG_ID, (array) $values, Criteria::IN);
        }

        $query = ActivityLogQuery::create()->mergeWith($criteria);

        if ($values instanceof Criteria) {
            ActivityLogTableMap::clearInstancePool();
        } elseif (!is_object($values)) { // it's a primary key, or an array of pks
            foreach ((array) $values as $singleval) {
                ActivityLogTableMap::removeInstanceFromPool($singleval);
            }
        }

        return $query->delete($con);
    }

    /**
     * Deletes all rows from the activity_log table.
     *
     * @param ConnectionInterface $con the connection to use
     * @return int The number of affected rows (if supported by underlying database driver).
     */
    public static function doDeleteAll(ConnectionInterface $con = null)
    {
        return ActivityLogQuery::create()->doDeleteAll($con);
    }

    /**
     * Performs an INSERT on the database, given a ActivityLog or Criteria object.
     *
     * @param mixed               $criteria Criteria or ActivityLog object containing data that is used to create the INSERT statement.
     * @param ConnectionInterface $con the ConnectionInterface connection to use
     * @return mixed           The new primary key.
     * @throws PropelException Any exceptions caught during processing will be
     *                         rethrown wrapped into a PropelException.
     */
    public static function doInsert($criteria, ConnectionInterface $con = null)
    {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getWriteConnection(ActivityLogTableMap::DATABASE_NAME);
        }

        if ($criteria instanceof Criteria) {
            $criteria = clone $criteria; // rename for clarity
        } else {
            $criteria = $criteria->buildCriteria(); // build Criteria from ActivityLog object
        }

        if ($criteria->containsKey(ActivityLogTableMap::COL_LOG_ID) && $criteria->keyContainsValue(ActivityLogTableMap::COL_LOG_ID) ) {
            throw new PropelException('Cannot insert a value for auto-increment primary key ('.ActivityLogTableMap::COL_LOG_ID.')');
        }


        // Set the correct dbName
        $query = ActivityLogQuery::create()->mergeWith($criteria);

        // use transaction because $criteria could contain info
        // for more than one table (I guess, conceivably)
        return $con->transaction(function () use ($con, $query) {
            return $query->doInsert($con);
        });
    }

} // ActivityLogTableMap
// This is the static code needed to register the TableMap for this table with the main Propel class.
//
ActivityLogTableMap::buildTableMap();
