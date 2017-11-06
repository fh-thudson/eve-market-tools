<?php

namespace Base;

use \Types as ChildTypes;
use \TypesQuery as ChildTypesQuery;
use \Exception;
use \PDO;
use Map\TypesTableMap;
use Propel\Runtime\Propel;
use Propel\Runtime\ActiveQuery\Criteria;
use Propel\Runtime\ActiveQuery\ModelCriteria;
use Propel\Runtime\Collection\ObjectCollection;
use Propel\Runtime\Connection\ConnectionInterface;
use Propel\Runtime\Exception\PropelException;

/**
 * Base class that represents a query for the 'types' table.
 *
 *
 *
 * @method     ChildTypesQuery orderByTypeId($order = Criteria::ASC) Order by the type_id column
 * @method     ChildTypesQuery orderByName($order = Criteria::ASC) Order by the name column
 * @method     ChildTypesQuery orderByDescription($order = Criteria::ASC) Order by the description column
 * @method     ChildTypesQuery orderByPublished($order = Criteria::ASC) Order by the published column
 * @method     ChildTypesQuery orderByGroupId($order = Criteria::ASC) Order by the group_id column
 *
 * @method     ChildTypesQuery groupByTypeId() Group by the type_id column
 * @method     ChildTypesQuery groupByName() Group by the name column
 * @method     ChildTypesQuery groupByDescription() Group by the description column
 * @method     ChildTypesQuery groupByPublished() Group by the published column
 * @method     ChildTypesQuery groupByGroupId() Group by the group_id column
 *
 * @method     ChildTypesQuery leftJoin($relation) Adds a LEFT JOIN clause to the query
 * @method     ChildTypesQuery rightJoin($relation) Adds a RIGHT JOIN clause to the query
 * @method     ChildTypesQuery innerJoin($relation) Adds a INNER JOIN clause to the query
 *
 * @method     ChildTypesQuery leftJoinWith($relation) Adds a LEFT JOIN clause and with to the query
 * @method     ChildTypesQuery rightJoinWith($relation) Adds a RIGHT JOIN clause and with to the query
 * @method     ChildTypesQuery innerJoinWith($relation) Adds a INNER JOIN clause and with to the query
 *
 * @method     ChildTypes findOne(ConnectionInterface $con = null) Return the first ChildTypes matching the query
 * @method     ChildTypes findOneOrCreate(ConnectionInterface $con = null) Return the first ChildTypes matching the query, or a new ChildTypes object populated from the query conditions when no match is found
 *
 * @method     ChildTypes findOneByTypeId(int $type_id) Return the first ChildTypes filtered by the type_id column
 * @method     ChildTypes findOneByName(string $name) Return the first ChildTypes filtered by the name column
 * @method     ChildTypes findOneByDescription(string $description) Return the first ChildTypes filtered by the description column
 * @method     ChildTypes findOneByPublished(string $published) Return the first ChildTypes filtered by the published column
 * @method     ChildTypes findOneByGroupId(int $group_id) Return the first ChildTypes filtered by the group_id column *

 * @method     ChildTypes requirePk($key, ConnectionInterface $con = null) Return the ChildTypes by primary key and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildTypes requireOne(ConnectionInterface $con = null) Return the first ChildTypes matching the query and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 *
 * @method     ChildTypes requireOneByTypeId(int $type_id) Return the first ChildTypes filtered by the type_id column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildTypes requireOneByName(string $name) Return the first ChildTypes filtered by the name column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildTypes requireOneByDescription(string $description) Return the first ChildTypes filtered by the description column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildTypes requireOneByPublished(string $published) Return the first ChildTypes filtered by the published column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildTypes requireOneByGroupId(int $group_id) Return the first ChildTypes filtered by the group_id column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 *
 * @method     ChildTypes[]|ObjectCollection find(ConnectionInterface $con = null) Return ChildTypes objects based on current ModelCriteria
 * @method     ChildTypes[]|ObjectCollection findByTypeId(int $type_id) Return ChildTypes objects filtered by the type_id column
 * @method     ChildTypes[]|ObjectCollection findByName(string $name) Return ChildTypes objects filtered by the name column
 * @method     ChildTypes[]|ObjectCollection findByDescription(string $description) Return ChildTypes objects filtered by the description column
 * @method     ChildTypes[]|ObjectCollection findByPublished(string $published) Return ChildTypes objects filtered by the published column
 * @method     ChildTypes[]|ObjectCollection findByGroupId(int $group_id) Return ChildTypes objects filtered by the group_id column
 * @method     ChildTypes[]|\Propel\Runtime\Util\PropelModelPager paginate($page = 1, $maxPerPage = 10, ConnectionInterface $con = null) Issue a SELECT query based on the current ModelCriteria and uses a page and a maximum number of results per page to compute an offset and a limit
 *
 */
abstract class TypesQuery extends ModelCriteria
{
    protected $entityNotFoundExceptionClass = '\\Propel\\Runtime\\Exception\\EntityNotFoundException';

    /**
     * Initializes internal state of \Base\TypesQuery object.
     *
     * @param     string $dbName The database name
     * @param     string $modelName The phpName of a model, e.g. 'Book'
     * @param     string $modelAlias The alias for the model in this query, e.g. 'b'
     */
    public function __construct($dbName = 'default', $modelName = '\\Types', $modelAlias = null)
    {
        parent::__construct($dbName, $modelName, $modelAlias);
    }

    /**
     * Returns a new ChildTypesQuery object.
     *
     * @param     string $modelAlias The alias of a model in the query
     * @param     Criteria $criteria Optional Criteria to build the query from
     *
     * @return ChildTypesQuery
     */
    public static function create($modelAlias = null, Criteria $criteria = null)
    {
        if ($criteria instanceof ChildTypesQuery) {
            return $criteria;
        }
        $query = new ChildTypesQuery();
        if (null !== $modelAlias) {
            $query->setModelAlias($modelAlias);
        }
        if ($criteria instanceof Criteria) {
            $query->mergeWith($criteria);
        }

        return $query;
    }

    /**
     * Find object by primary key.
     * Propel uses the instance pool to skip the database if the object exists.
     * Go fast if the query is untouched.
     *
     * <code>
     * $obj  = $c->findPk(12, $con);
     * </code>
     *
     * @param mixed $key Primary key to use for the query
     * @param ConnectionInterface $con an optional connection object
     *
     * @return ChildTypes|array|mixed the result, formatted by the current formatter
     */
    public function findPk($key, ConnectionInterface $con = null)
    {
        if ($key === null) {
            return null;
        }

        if ($con === null) {
            $con = Propel::getServiceContainer()->getReadConnection(TypesTableMap::DATABASE_NAME);
        }

        $this->basePreSelect($con);

        if (
            $this->formatter || $this->modelAlias || $this->with || $this->select
            || $this->selectColumns || $this->asColumns || $this->selectModifiers
            || $this->map || $this->having || $this->joins
        ) {
            return $this->findPkComplex($key, $con);
        }

        if ((null !== ($obj = TypesTableMap::getInstanceFromPool(null === $key || is_scalar($key) || is_callable([$key, '__toString']) ? (string) $key : $key)))) {
            // the object is already in the instance pool
            return $obj;
        }

        return $this->findPkSimple($key, $con);
    }

    /**
     * Find object by primary key using raw SQL to go fast.
     * Bypass doSelect() and the object formatter by using generated code.
     *
     * @param     mixed $key Primary key to use for the query
     * @param     ConnectionInterface $con A connection object
     *
     * @throws \Propel\Runtime\Exception\PropelException
     *
     * @return ChildTypes A model object, or null if the key is not found
     */
    protected function findPkSimple($key, ConnectionInterface $con)
    {
        $sql = 'SELECT type_id, name, description, published, group_id FROM types WHERE type_id = :p0';
        try {
            $stmt = $con->prepare($sql);
            $stmt->bindValue(':p0', $key, PDO::PARAM_INT);
            $stmt->execute();
        } catch (Exception $e) {
            Propel::log($e->getMessage(), Propel::LOG_ERR);
            throw new PropelException(sprintf('Unable to execute SELECT statement [%s]', $sql), 0, $e);
        }
        $obj = null;
        if ($row = $stmt->fetch(\PDO::FETCH_NUM)) {
            /** @var ChildTypes $obj */
            $obj = new ChildTypes();
            $obj->hydrate($row);
            TypesTableMap::addInstanceToPool($obj, null === $key || is_scalar($key) || is_callable([$key, '__toString']) ? (string) $key : $key);
        }
        $stmt->closeCursor();

        return $obj;
    }

    /**
     * Find object by primary key.
     *
     * @param     mixed $key Primary key to use for the query
     * @param     ConnectionInterface $con A connection object
     *
     * @return ChildTypes|array|mixed the result, formatted by the current formatter
     */
    protected function findPkComplex($key, ConnectionInterface $con)
    {
        // As the query uses a PK condition, no limit(1) is necessary.
        $criteria = $this->isKeepQuery() ? clone $this : $this;
        $dataFetcher = $criteria
            ->filterByPrimaryKey($key)
            ->doSelect($con);

        return $criteria->getFormatter()->init($criteria)->formatOne($dataFetcher);
    }

    /**
     * Find objects by primary key
     * <code>
     * $objs = $c->findPks(array(12, 56, 832), $con);
     * </code>
     * @param     array $keys Primary keys to use for the query
     * @param     ConnectionInterface $con an optional connection object
     *
     * @return ObjectCollection|array|mixed the list of results, formatted by the current formatter
     */
    public function findPks($keys, ConnectionInterface $con = null)
    {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getReadConnection($this->getDbName());
        }
        $this->basePreSelect($con);
        $criteria = $this->isKeepQuery() ? clone $this : $this;
        $dataFetcher = $criteria
            ->filterByPrimaryKeys($keys)
            ->doSelect($con);

        return $criteria->getFormatter()->init($criteria)->format($dataFetcher);
    }

    /**
     * Filter the query by primary key
     *
     * @param     mixed $key Primary key to use for the query
     *
     * @return $this|ChildTypesQuery The current query, for fluid interface
     */
    public function filterByPrimaryKey($key)
    {

        return $this->addUsingAlias(TypesTableMap::COL_TYPE_ID, $key, Criteria::EQUAL);
    }

    /**
     * Filter the query by a list of primary keys
     *
     * @param     array $keys The list of primary key to use for the query
     *
     * @return $this|ChildTypesQuery The current query, for fluid interface
     */
    public function filterByPrimaryKeys($keys)
    {

        return $this->addUsingAlias(TypesTableMap::COL_TYPE_ID, $keys, Criteria::IN);
    }

    /**
     * Filter the query on the type_id column
     *
     * Example usage:
     * <code>
     * $query->filterByTypeId(1234); // WHERE type_id = 1234
     * $query->filterByTypeId(array(12, 34)); // WHERE type_id IN (12, 34)
     * $query->filterByTypeId(array('min' => 12)); // WHERE type_id > 12
     * </code>
     *
     * @param     mixed $typeId The value to use as filter.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildTypesQuery The current query, for fluid interface
     */
    public function filterByTypeId($typeId = null, $comparison = null)
    {
        if (is_array($typeId)) {
            $useMinMax = false;
            if (isset($typeId['min'])) {
                $this->addUsingAlias(TypesTableMap::COL_TYPE_ID, $typeId['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($typeId['max'])) {
                $this->addUsingAlias(TypesTableMap::COL_TYPE_ID, $typeId['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(TypesTableMap::COL_TYPE_ID, $typeId, $comparison);
    }

    /**
     * Filter the query on the name column
     *
     * Example usage:
     * <code>
     * $query->filterByName('fooValue');   // WHERE name = 'fooValue'
     * $query->filterByName('%fooValue%', Criteria::LIKE); // WHERE name LIKE '%fooValue%'
     * </code>
     *
     * @param     string $name The value to use as filter.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildTypesQuery The current query, for fluid interface
     */
    public function filterByName($name = null, $comparison = null)
    {
        if (null === $comparison) {
            if (is_array($name)) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(TypesTableMap::COL_NAME, $name, $comparison);
    }

    /**
     * Filter the query on the description column
     *
     * Example usage:
     * <code>
     * $query->filterByDescription('fooValue');   // WHERE description = 'fooValue'
     * $query->filterByDescription('%fooValue%', Criteria::LIKE); // WHERE description LIKE '%fooValue%'
     * </code>
     *
     * @param     string $description The value to use as filter.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildTypesQuery The current query, for fluid interface
     */
    public function filterByDescription($description = null, $comparison = null)
    {
        if (null === $comparison) {
            if (is_array($description)) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(TypesTableMap::COL_DESCRIPTION, $description, $comparison);
    }

    /**
     * Filter the query on the published column
     *
     * Example usage:
     * <code>
     * $query->filterByPublished('fooValue');   // WHERE published = 'fooValue'
     * $query->filterByPublished('%fooValue%', Criteria::LIKE); // WHERE published LIKE '%fooValue%'
     * </code>
     *
     * @param     string $published The value to use as filter.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildTypesQuery The current query, for fluid interface
     */
    public function filterByPublished($published = null, $comparison = null)
    {
        if (null === $comparison) {
            if (is_array($published)) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(TypesTableMap::COL_PUBLISHED, $published, $comparison);
    }

    /**
     * Filter the query on the group_id column
     *
     * Example usage:
     * <code>
     * $query->filterByGroupId(1234); // WHERE group_id = 1234
     * $query->filterByGroupId(array(12, 34)); // WHERE group_id IN (12, 34)
     * $query->filterByGroupId(array('min' => 12)); // WHERE group_id > 12
     * </code>
     *
     * @param     mixed $groupId The value to use as filter.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildTypesQuery The current query, for fluid interface
     */
    public function filterByGroupId($groupId = null, $comparison = null)
    {
        if (is_array($groupId)) {
            $useMinMax = false;
            if (isset($groupId['min'])) {
                $this->addUsingAlias(TypesTableMap::COL_GROUP_ID, $groupId['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($groupId['max'])) {
                $this->addUsingAlias(TypesTableMap::COL_GROUP_ID, $groupId['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(TypesTableMap::COL_GROUP_ID, $groupId, $comparison);
    }

    /**
     * Exclude object from result
     *
     * @param   ChildTypes $types Object to remove from the list of results
     *
     * @return $this|ChildTypesQuery The current query, for fluid interface
     */
    public function prune($types = null)
    {
        if ($types) {
            $this->addUsingAlias(TypesTableMap::COL_TYPE_ID, $types->getTypeId(), Criteria::NOT_EQUAL);
        }

        return $this;
    }

    /**
     * Deletes all rows from the types table.
     *
     * @param ConnectionInterface $con the connection to use
     * @return int The number of affected rows (if supported by underlying database driver).
     */
    public function doDeleteAll(ConnectionInterface $con = null)
    {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getWriteConnection(TypesTableMap::DATABASE_NAME);
        }

        // use transaction because $criteria could contain info
        // for more than one table or we could emulating ON DELETE CASCADE, etc.
        return $con->transaction(function () use ($con) {
            $affectedRows = 0; // initialize var to track total num of affected rows
            $affectedRows += parent::doDeleteAll($con);
            // Because this db requires some delete cascade/set null emulation, we have to
            // clear the cached instance *after* the emulation has happened (since
            // instances get re-added by the select statement contained therein).
            TypesTableMap::clearInstancePool();
            TypesTableMap::clearRelatedInstancePool();

            return $affectedRows;
        });
    }

    /**
     * Performs a DELETE on the database based on the current ModelCriteria
     *
     * @param ConnectionInterface $con the connection to use
     * @return int             The number of affected rows (if supported by underlying database driver).  This includes CASCADE-related rows
     *                         if supported by native driver or if emulated using Propel.
     * @throws PropelException Any exceptions caught during processing will be
     *                         rethrown wrapped into a PropelException.
     */
    public function delete(ConnectionInterface $con = null)
    {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getWriteConnection(TypesTableMap::DATABASE_NAME);
        }

        $criteria = $this;

        // Set the correct dbName
        $criteria->setDbName(TypesTableMap::DATABASE_NAME);

        // use transaction because $criteria could contain info
        // for more than one table or we could emulating ON DELETE CASCADE, etc.
        return $con->transaction(function () use ($con, $criteria) {
            $affectedRows = 0; // initialize var to track total num of affected rows

            TypesTableMap::removeInstanceFromPool($criteria);

            $affectedRows += ModelCriteria::delete($con);
            TypesTableMap::clearRelatedInstancePool();

            return $affectedRows;
        });
    }

} // TypesQuery
