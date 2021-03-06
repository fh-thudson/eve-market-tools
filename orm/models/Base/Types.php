<?php

namespace Base;

use \TypesQuery as ChildTypesQuery;
use \Exception;
use \PDO;
use Map\TypesTableMap;
use Propel\Runtime\Propel;
use Propel\Runtime\ActiveQuery\Criteria;
use Propel\Runtime\ActiveQuery\ModelCriteria;
use Propel\Runtime\ActiveRecord\ActiveRecordInterface;
use Propel\Runtime\Collection\Collection;
use Propel\Runtime\Connection\ConnectionInterface;
use Propel\Runtime\Exception\BadMethodCallException;
use Propel\Runtime\Exception\LogicException;
use Propel\Runtime\Exception\PropelException;
use Propel\Runtime\Map\TableMap;
use Propel\Runtime\Parser\AbstractParser;

/**
 * Base class that represents a row from the 'types' table.
 *
 *
 *
 * @package    propel.generator..Base
 */
abstract class Types implements ActiveRecordInterface
{
    /**
     * TableMap class name
     */
    const TABLE_MAP = '\\Map\\TypesTableMap';


    /**
     * attribute to determine if this object has previously been saved.
     * @var boolean
     */
    protected $new = true;

    /**
     * attribute to determine whether this object has been deleted.
     * @var boolean
     */
    protected $deleted = false;

    /**
     * The columns that have been modified in current object.
     * Tracking modified columns allows us to only update modified columns.
     * @var array
     */
    protected $modifiedColumns = array();

    /**
     * The (virtual) columns that are added at runtime
     * The formatters can add supplementary columns based on a resultset
     * @var array
     */
    protected $virtualColumns = array();

    /**
     * The value for the type_id field.
     *
     * @var        int
     */
    protected $type_id;

    /**
     * The value for the name field.
     *
     * @var        string
     */
    protected $name;

    /**
     * The value for the description field.
     *
     * @var        string
     */
    protected $description;

    /**
     * The value for the published field.
     *
     * @var        int
     */
    protected $published;

    /**
     * The value for the group_id field.
     *
     * @var        int
     */
    protected $group_id;

    /**
     * The value for the radius field.
     *
     * @var        int
     */
    protected $radius;

    /**
     * The value for the volume field.
     *
     * @var        double
     */
    protected $volume;

    /**
     * The value for the packaged_volume field.
     *
     * @var        int
     */
    protected $packaged_volume;

    /**
     * The value for the icon_id field.
     *
     * @var        int
     */
    protected $icon_id;

    /**
     * The value for the capacity field.
     *
     * @var        int
     */
    protected $capacity;

    /**
     * The value for the portion_size field.
     *
     * @var        int
     */
    protected $portion_size;

    /**
     * The value for the mass field.
     *
     * @var        string
     */
    protected $mass;

    /**
     * The value for the graphic_id field.
     *
     * @var        int
     */
    protected $graphic_id;

    /**
     * The value for the dogma_attributes field.
     *
     * @var        int
     */
    protected $dogma_attributes;

    /**
     * Flag to prevent endless save loop, if this object is referenced
     * by another object which falls in this transaction.
     *
     * @var boolean
     */
    protected $alreadyInSave = false;

    /**
     * Initializes internal state of Base\Types object.
     */
    public function __construct()
    {
    }

    /**
     * Returns whether the object has been modified.
     *
     * @return boolean True if the object has been modified.
     */
    public function isModified()
    {
        return !!$this->modifiedColumns;
    }

    /**
     * Has specified column been modified?
     *
     * @param  string  $col column fully qualified name (TableMap::TYPE_COLNAME), e.g. Book::AUTHOR_ID
     * @return boolean True if $col has been modified.
     */
    public function isColumnModified($col)
    {
        return $this->modifiedColumns && isset($this->modifiedColumns[$col]);
    }

    /**
     * Get the columns that have been modified in this object.
     * @return array A unique list of the modified column names for this object.
     */
    public function getModifiedColumns()
    {
        return $this->modifiedColumns ? array_keys($this->modifiedColumns) : [];
    }

    /**
     * Returns whether the object has ever been saved.  This will
     * be false, if the object was retrieved from storage or was created
     * and then saved.
     *
     * @return boolean true, if the object has never been persisted.
     */
    public function isNew()
    {
        return $this->new;
    }

    /**
     * Setter for the isNew attribute.  This method will be called
     * by Propel-generated children and objects.
     *
     * @param boolean $b the state of the object.
     */
    public function setNew($b)
    {
        $this->new = (boolean) $b;
    }

    /**
     * Whether this object has been deleted.
     * @return boolean The deleted state of this object.
     */
    public function isDeleted()
    {
        return $this->deleted;
    }

    /**
     * Specify whether this object has been deleted.
     * @param  boolean $b The deleted state of this object.
     * @return void
     */
    public function setDeleted($b)
    {
        $this->deleted = (boolean) $b;
    }

    /**
     * Sets the modified state for the object to be false.
     * @param  string $col If supplied, only the specified column is reset.
     * @return void
     */
    public function resetModified($col = null)
    {
        if (null !== $col) {
            if (isset($this->modifiedColumns[$col])) {
                unset($this->modifiedColumns[$col]);
            }
        } else {
            $this->modifiedColumns = array();
        }
    }

    /**
     * Compares this with another <code>Types</code> instance.  If
     * <code>obj</code> is an instance of <code>Types</code>, delegates to
     * <code>equals(Types)</code>.  Otherwise, returns <code>false</code>.
     *
     * @param  mixed   $obj The object to compare to.
     * @return boolean Whether equal to the object specified.
     */
    public function equals($obj)
    {
        if (!$obj instanceof static) {
            return false;
        }

        if ($this === $obj) {
            return true;
        }

        if (null === $this->getPrimaryKey() || null === $obj->getPrimaryKey()) {
            return false;
        }

        return $this->getPrimaryKey() === $obj->getPrimaryKey();
    }

    /**
     * Get the associative array of the virtual columns in this object
     *
     * @return array
     */
    public function getVirtualColumns()
    {
        return $this->virtualColumns;
    }

    /**
     * Checks the existence of a virtual column in this object
     *
     * @param  string  $name The virtual column name
     * @return boolean
     */
    public function hasVirtualColumn($name)
    {
        return array_key_exists($name, $this->virtualColumns);
    }

    /**
     * Get the value of a virtual column in this object
     *
     * @param  string $name The virtual column name
     * @return mixed
     *
     * @throws PropelException
     */
    public function getVirtualColumn($name)
    {
        if (!$this->hasVirtualColumn($name)) {
            throw new PropelException(sprintf('Cannot get value of inexistent virtual column %s.', $name));
        }

        return $this->virtualColumns[$name];
    }

    /**
     * Set the value of a virtual column in this object
     *
     * @param string $name  The virtual column name
     * @param mixed  $value The value to give to the virtual column
     *
     * @return $this|Types The current object, for fluid interface
     */
    public function setVirtualColumn($name, $value)
    {
        $this->virtualColumns[$name] = $value;

        return $this;
    }

    /**
     * Logs a message using Propel::log().
     *
     * @param  string  $msg
     * @param  int     $priority One of the Propel::LOG_* logging levels
     * @return boolean
     */
    protected function log($msg, $priority = Propel::LOG_INFO)
    {
        return Propel::log(get_class($this) . ': ' . $msg, $priority);
    }

    /**
     * Export the current object properties to a string, using a given parser format
     * <code>
     * $book = BookQuery::create()->findPk(9012);
     * echo $book->exportTo('JSON');
     *  => {"Id":9012,"Title":"Don Juan","ISBN":"0140422161","Price":12.99,"PublisherId":1234,"AuthorId":5678}');
     * </code>
     *
     * @param  mixed   $parser                 A AbstractParser instance, or a format name ('XML', 'YAML', 'JSON', 'CSV')
     * @param  boolean $includeLazyLoadColumns (optional) Whether to include lazy load(ed) columns. Defaults to TRUE.
     * @return string  The exported data
     */
    public function exportTo($parser, $includeLazyLoadColumns = true)
    {
        if (!$parser instanceof AbstractParser) {
            $parser = AbstractParser::getParser($parser);
        }

        return $parser->fromArray($this->toArray(TableMap::TYPE_PHPNAME, $includeLazyLoadColumns, array(), true));
    }

    /**
     * Clean up internal collections prior to serializing
     * Avoids recursive loops that turn into segmentation faults when serializing
     */
    public function __sleep()
    {
        $this->clearAllReferences();

        $cls = new \ReflectionClass($this);
        $propertyNames = [];
        $serializableProperties = array_diff($cls->getProperties(), $cls->getProperties(\ReflectionProperty::IS_STATIC));

        foreach($serializableProperties as $property) {
            $propertyNames[] = $property->getName();
        }

        return $propertyNames;
    }

    /**
     * Get the [type_id] column value.
     *
     * @return int
     */
    public function getTypeId()
    {
        return $this->type_id;
    }

    /**
     * Get the [name] column value.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Get the [description] column value.
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Get the [published] column value.
     *
     * @return int
     */
    public function getPublished()
    {
        return $this->published;
    }

    /**
     * Get the [group_id] column value.
     *
     * @return int
     */
    public function getGroupId()
    {
        return $this->group_id;
    }

    /**
     * Get the [radius] column value.
     *
     * @return int
     */
    public function getRadius()
    {
        return $this->radius;
    }

    /**
     * Get the [volume] column value.
     *
     * @return double
     */
    public function getVolume()
    {
        return $this->volume;
    }

    /**
     * Get the [packaged_volume] column value.
     *
     * @return int
     */
    public function getPackagedVolume()
    {
        return $this->packaged_volume;
    }

    /**
     * Get the [icon_id] column value.
     *
     * @return int
     */
    public function getIconId()
    {
        return $this->icon_id;
    }

    /**
     * Get the [capacity] column value.
     *
     * @return int
     */
    public function getCapacity()
    {
        return $this->capacity;
    }

    /**
     * Get the [portion_size] column value.
     *
     * @return int
     */
    public function getPortionSize()
    {
        return $this->portion_size;
    }

    /**
     * Get the [mass] column value.
     *
     * @return string
     */
    public function getMass()
    {
        return $this->mass;
    }

    /**
     * Get the [graphic_id] column value.
     *
     * @return int
     */
    public function getGraphicId()
    {
        return $this->graphic_id;
    }

    /**
     * Get the [dogma_attributes] column value.
     *
     * @return int
     */
    public function getDogmaAttributes()
    {
        return $this->dogma_attributes;
    }

    /**
     * Set the value of [type_id] column.
     *
     * @param int $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setTypeId($v)
    {
        if ($v !== null) {
            $v = (int) $v;
        }

        if ($this->type_id !== $v) {
            $this->type_id = $v;
            $this->modifiedColumns[TypesTableMap::COL_TYPE_ID] = true;
        }

        return $this;
    } // setTypeId()

    /**
     * Set the value of [name] column.
     *
     * @param string $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setName($v)
    {
        if ($v !== null) {
            $v = (string) $v;
        }

        if ($this->name !== $v) {
            $this->name = $v;
            $this->modifiedColumns[TypesTableMap::COL_NAME] = true;
        }

        return $this;
    } // setName()

    /**
     * Set the value of [description] column.
     *
     * @param string $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setDescription($v)
    {
        if ($v !== null) {
            $v = (string) $v;
        }

        if ($this->description !== $v) {
            $this->description = $v;
            $this->modifiedColumns[TypesTableMap::COL_DESCRIPTION] = true;
        }

        return $this;
    } // setDescription()

    /**
     * Set the value of [published] column.
     *
     * @param int $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setPublished($v)
    {
        if ($v !== null) {
            $v = (int) $v;
        }

        if ($this->published !== $v) {
            $this->published = $v;
            $this->modifiedColumns[TypesTableMap::COL_PUBLISHED] = true;
        }

        return $this;
    } // setPublished()

    /**
     * Set the value of [group_id] column.
     *
     * @param int $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setGroupId($v)
    {
        if ($v !== null) {
            $v = (int) $v;
        }

        if ($this->group_id !== $v) {
            $this->group_id = $v;
            $this->modifiedColumns[TypesTableMap::COL_GROUP_ID] = true;
        }

        return $this;
    } // setGroupId()

    /**
     * Set the value of [radius] column.
     *
     * @param int $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setRadius($v)
    {
        if ($v !== null) {
            $v = (int) $v;
        }

        if ($this->radius !== $v) {
            $this->radius = $v;
            $this->modifiedColumns[TypesTableMap::COL_RADIUS] = true;
        }

        return $this;
    } // setRadius()

    /**
     * Set the value of [volume] column.
     *
     * @param double $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setVolume($v)
    {
        if ($v !== null) {
            $v = (double) $v;
        }

        if ($this->volume !== $v) {
            $this->volume = $v;
            $this->modifiedColumns[TypesTableMap::COL_VOLUME] = true;
        }

        return $this;
    } // setVolume()

    /**
     * Set the value of [packaged_volume] column.
     *
     * @param int $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setPackagedVolume($v)
    {
        if ($v !== null) {
            $v = (int) $v;
        }

        if ($this->packaged_volume !== $v) {
            $this->packaged_volume = $v;
            $this->modifiedColumns[TypesTableMap::COL_PACKAGED_VOLUME] = true;
        }

        return $this;
    } // setPackagedVolume()

    /**
     * Set the value of [icon_id] column.
     *
     * @param int $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setIconId($v)
    {
        if ($v !== null) {
            $v = (int) $v;
        }

        if ($this->icon_id !== $v) {
            $this->icon_id = $v;
            $this->modifiedColumns[TypesTableMap::COL_ICON_ID] = true;
        }

        return $this;
    } // setIconId()

    /**
     * Set the value of [capacity] column.
     *
     * @param int $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setCapacity($v)
    {
        if ($v !== null) {
            $v = (int) $v;
        }

        if ($this->capacity !== $v) {
            $this->capacity = $v;
            $this->modifiedColumns[TypesTableMap::COL_CAPACITY] = true;
        }

        return $this;
    } // setCapacity()

    /**
     * Set the value of [portion_size] column.
     *
     * @param int $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setPortionSize($v)
    {
        if ($v !== null) {
            $v = (int) $v;
        }

        if ($this->portion_size !== $v) {
            $this->portion_size = $v;
            $this->modifiedColumns[TypesTableMap::COL_PORTION_SIZE] = true;
        }

        return $this;
    } // setPortionSize()

    /**
     * Set the value of [mass] column.
     *
     * @param string $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setMass($v)
    {
        if ($v !== null) {
            $v = (string) $v;
        }

        if ($this->mass !== $v) {
            $this->mass = $v;
            $this->modifiedColumns[TypesTableMap::COL_MASS] = true;
        }

        return $this;
    } // setMass()

    /**
     * Set the value of [graphic_id] column.
     *
     * @param int $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setGraphicId($v)
    {
        if ($v !== null) {
            $v = (int) $v;
        }

        if ($this->graphic_id !== $v) {
            $this->graphic_id = $v;
            $this->modifiedColumns[TypesTableMap::COL_GRAPHIC_ID] = true;
        }

        return $this;
    } // setGraphicId()

    /**
     * Set the value of [dogma_attributes] column.
     *
     * @param int $v new value
     * @return $this|\Types The current object (for fluent API support)
     */
    public function setDogmaAttributes($v)
    {
        if ($v !== null) {
            $v = (int) $v;
        }

        if ($this->dogma_attributes !== $v) {
            $this->dogma_attributes = $v;
            $this->modifiedColumns[TypesTableMap::COL_DOGMA_ATTRIBUTES] = true;
        }

        return $this;
    } // setDogmaAttributes()

    /**
     * Indicates whether the columns in this object are only set to default values.
     *
     * This method can be used in conjunction with isModified() to indicate whether an object is both
     * modified _and_ has some values set which are non-default.
     *
     * @return boolean Whether the columns in this object are only been set with default values.
     */
    public function hasOnlyDefaultValues()
    {
        // otherwise, everything was equal, so return TRUE
        return true;
    } // hasOnlyDefaultValues()

    /**
     * Hydrates (populates) the object variables with values from the database resultset.
     *
     * An offset (0-based "start column") is specified so that objects can be hydrated
     * with a subset of the columns in the resultset rows.  This is needed, for example,
     * for results of JOIN queries where the resultset row includes columns from two or
     * more tables.
     *
     * @param array   $row       The row returned by DataFetcher->fetch().
     * @param int     $startcol  0-based offset column which indicates which restultset column to start with.
     * @param boolean $rehydrate Whether this object is being re-hydrated from the database.
     * @param string  $indexType The index type of $row. Mostly DataFetcher->getIndexType().
                                  One of the class type constants TableMap::TYPE_PHPNAME, TableMap::TYPE_CAMELNAME
     *                            TableMap::TYPE_COLNAME, TableMap::TYPE_FIELDNAME, TableMap::TYPE_NUM.
     *
     * @return int             next starting column
     * @throws PropelException - Any caught Exception will be rewrapped as a PropelException.
     */
    public function hydrate($row, $startcol = 0, $rehydrate = false, $indexType = TableMap::TYPE_NUM)
    {
        try {

            $col = $row[TableMap::TYPE_NUM == $indexType ? 0 + $startcol : TypesTableMap::translateFieldName('TypeId', TableMap::TYPE_PHPNAME, $indexType)];
            $this->type_id = (null !== $col) ? (int) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 1 + $startcol : TypesTableMap::translateFieldName('Name', TableMap::TYPE_PHPNAME, $indexType)];
            $this->name = (null !== $col) ? (string) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 2 + $startcol : TypesTableMap::translateFieldName('Description', TableMap::TYPE_PHPNAME, $indexType)];
            $this->description = (null !== $col) ? (string) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 3 + $startcol : TypesTableMap::translateFieldName('Published', TableMap::TYPE_PHPNAME, $indexType)];
            $this->published = (null !== $col) ? (int) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 4 + $startcol : TypesTableMap::translateFieldName('GroupId', TableMap::TYPE_PHPNAME, $indexType)];
            $this->group_id = (null !== $col) ? (int) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 5 + $startcol : TypesTableMap::translateFieldName('Radius', TableMap::TYPE_PHPNAME, $indexType)];
            $this->radius = (null !== $col) ? (int) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 6 + $startcol : TypesTableMap::translateFieldName('Volume', TableMap::TYPE_PHPNAME, $indexType)];
            $this->volume = (null !== $col) ? (double) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 7 + $startcol : TypesTableMap::translateFieldName('PackagedVolume', TableMap::TYPE_PHPNAME, $indexType)];
            $this->packaged_volume = (null !== $col) ? (int) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 8 + $startcol : TypesTableMap::translateFieldName('IconId', TableMap::TYPE_PHPNAME, $indexType)];
            $this->icon_id = (null !== $col) ? (int) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 9 + $startcol : TypesTableMap::translateFieldName('Capacity', TableMap::TYPE_PHPNAME, $indexType)];
            $this->capacity = (null !== $col) ? (int) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 10 + $startcol : TypesTableMap::translateFieldName('PortionSize', TableMap::TYPE_PHPNAME, $indexType)];
            $this->portion_size = (null !== $col) ? (int) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 11 + $startcol : TypesTableMap::translateFieldName('Mass', TableMap::TYPE_PHPNAME, $indexType)];
            $this->mass = (null !== $col) ? (string) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 12 + $startcol : TypesTableMap::translateFieldName('GraphicId', TableMap::TYPE_PHPNAME, $indexType)];
            $this->graphic_id = (null !== $col) ? (int) $col : null;

            $col = $row[TableMap::TYPE_NUM == $indexType ? 13 + $startcol : TypesTableMap::translateFieldName('DogmaAttributes', TableMap::TYPE_PHPNAME, $indexType)];
            $this->dogma_attributes = (null !== $col) ? (int) $col : null;
            $this->resetModified();

            $this->setNew(false);

            if ($rehydrate) {
                $this->ensureConsistency();
            }

            return $startcol + 14; // 14 = TypesTableMap::NUM_HYDRATE_COLUMNS.

        } catch (Exception $e) {
            throw new PropelException(sprintf('Error populating %s object', '\\Types'), 0, $e);
        }
    }

    /**
     * Checks and repairs the internal consistency of the object.
     *
     * This method is executed after an already-instantiated object is re-hydrated
     * from the database.  It exists to check any foreign keys to make sure that
     * the objects related to the current object are correct based on foreign key.
     *
     * You can override this method in the stub class, but you should always invoke
     * the base method from the overridden method (i.e. parent::ensureConsistency()),
     * in case your model changes.
     *
     * @throws PropelException
     */
    public function ensureConsistency()
    {
    } // ensureConsistency

    /**
     * Reloads this object from datastore based on primary key and (optionally) resets all associated objects.
     *
     * This will only work if the object has been saved and has a valid primary key set.
     *
     * @param      boolean $deep (optional) Whether to also de-associated any related objects.
     * @param      ConnectionInterface $con (optional) The ConnectionInterface connection to use.
     * @return void
     * @throws PropelException - if this object is deleted, unsaved or doesn't have pk match in db
     */
    public function reload($deep = false, ConnectionInterface $con = null)
    {
        if ($this->isDeleted()) {
            throw new PropelException("Cannot reload a deleted object.");
        }

        if ($this->isNew()) {
            throw new PropelException("Cannot reload an unsaved object.");
        }

        if ($con === null) {
            $con = Propel::getServiceContainer()->getReadConnection(TypesTableMap::DATABASE_NAME);
        }

        // We don't need to alter the object instance pool; we're just modifying this instance
        // already in the pool.

        $dataFetcher = ChildTypesQuery::create(null, $this->buildPkeyCriteria())->setFormatter(ModelCriteria::FORMAT_STATEMENT)->find($con);
        $row = $dataFetcher->fetch();
        $dataFetcher->close();
        if (!$row) {
            throw new PropelException('Cannot find matching row in the database to reload object values.');
        }
        $this->hydrate($row, 0, true, $dataFetcher->getIndexType()); // rehydrate

        if ($deep) {  // also de-associate any related objects?

        } // if (deep)
    }

    /**
     * Removes this object from datastore and sets delete attribute.
     *
     * @param      ConnectionInterface $con
     * @return void
     * @throws PropelException
     * @see Types::setDeleted()
     * @see Types::isDeleted()
     */
    public function delete(ConnectionInterface $con = null)
    {
        if ($this->isDeleted()) {
            throw new PropelException("This object has already been deleted.");
        }

        if ($con === null) {
            $con = Propel::getServiceContainer()->getWriteConnection(TypesTableMap::DATABASE_NAME);
        }

        $con->transaction(function () use ($con) {
            $deleteQuery = ChildTypesQuery::create()
                ->filterByPrimaryKey($this->getPrimaryKey());
            $ret = $this->preDelete($con);
            if ($ret) {
                $deleteQuery->delete($con);
                $this->postDelete($con);
                $this->setDeleted(true);
            }
        });
    }

    /**
     * Persists this object to the database.
     *
     * If the object is new, it inserts it; otherwise an update is performed.
     * All modified related objects will also be persisted in the doSave()
     * method.  This method wraps all precipitate database operations in a
     * single transaction.
     *
     * @param      ConnectionInterface $con
     * @return int             The number of rows affected by this insert/update and any referring fk objects' save() operations.
     * @throws PropelException
     * @see doSave()
     */
    public function save(ConnectionInterface $con = null)
    {
        if ($this->isDeleted()) {
            throw new PropelException("You cannot save an object that has been deleted.");
        }

        if ($this->alreadyInSave) {
            return 0;
        }

        if ($con === null) {
            $con = Propel::getServiceContainer()->getWriteConnection(TypesTableMap::DATABASE_NAME);
        }

        return $con->transaction(function () use ($con) {
            $ret = $this->preSave($con);
            $isInsert = $this->isNew();
            if ($isInsert) {
                $ret = $ret && $this->preInsert($con);
            } else {
                $ret = $ret && $this->preUpdate($con);
            }
            if ($ret) {
                $affectedRows = $this->doSave($con);
                if ($isInsert) {
                    $this->postInsert($con);
                } else {
                    $this->postUpdate($con);
                }
                $this->postSave($con);
                TypesTableMap::addInstanceToPool($this);
            } else {
                $affectedRows = 0;
            }

            return $affectedRows;
        });
    }

    /**
     * Performs the work of inserting or updating the row in the database.
     *
     * If the object is new, it inserts it; otherwise an update is performed.
     * All related objects are also updated in this method.
     *
     * @param      ConnectionInterface $con
     * @return int             The number of rows affected by this insert/update and any referring fk objects' save() operations.
     * @throws PropelException
     * @see save()
     */
    protected function doSave(ConnectionInterface $con)
    {
        $affectedRows = 0; // initialize var to track total num of affected rows
        if (!$this->alreadyInSave) {
            $this->alreadyInSave = true;

            if ($this->isNew() || $this->isModified()) {
                // persist changes
                if ($this->isNew()) {
                    $this->doInsert($con);
                    $affectedRows += 1;
                } else {
                    $affectedRows += $this->doUpdate($con);
                }
                $this->resetModified();
            }

            $this->alreadyInSave = false;

        }

        return $affectedRows;
    } // doSave()

    /**
     * Insert the row in the database.
     *
     * @param      ConnectionInterface $con
     *
     * @throws PropelException
     * @see doSave()
     */
    protected function doInsert(ConnectionInterface $con)
    {
        $modifiedColumns = array();
        $index = 0;


         // check the columns in natural order for more readable SQL queries
        if ($this->isColumnModified(TypesTableMap::COL_TYPE_ID)) {
            $modifiedColumns[':p' . $index++]  = 'type_id';
        }
        if ($this->isColumnModified(TypesTableMap::COL_NAME)) {
            $modifiedColumns[':p' . $index++]  = 'name';
        }
        if ($this->isColumnModified(TypesTableMap::COL_DESCRIPTION)) {
            $modifiedColumns[':p' . $index++]  = 'description';
        }
        if ($this->isColumnModified(TypesTableMap::COL_PUBLISHED)) {
            $modifiedColumns[':p' . $index++]  = 'published';
        }
        if ($this->isColumnModified(TypesTableMap::COL_GROUP_ID)) {
            $modifiedColumns[':p' . $index++]  = 'group_id';
        }
        if ($this->isColumnModified(TypesTableMap::COL_RADIUS)) {
            $modifiedColumns[':p' . $index++]  = 'radius';
        }
        if ($this->isColumnModified(TypesTableMap::COL_VOLUME)) {
            $modifiedColumns[':p' . $index++]  = 'volume';
        }
        if ($this->isColumnModified(TypesTableMap::COL_PACKAGED_VOLUME)) {
            $modifiedColumns[':p' . $index++]  = 'packaged_volume';
        }
        if ($this->isColumnModified(TypesTableMap::COL_ICON_ID)) {
            $modifiedColumns[':p' . $index++]  = 'icon_id';
        }
        if ($this->isColumnModified(TypesTableMap::COL_CAPACITY)) {
            $modifiedColumns[':p' . $index++]  = 'capacity';
        }
        if ($this->isColumnModified(TypesTableMap::COL_PORTION_SIZE)) {
            $modifiedColumns[':p' . $index++]  = 'portion_size';
        }
        if ($this->isColumnModified(TypesTableMap::COL_MASS)) {
            $modifiedColumns[':p' . $index++]  = 'mass';
        }
        if ($this->isColumnModified(TypesTableMap::COL_GRAPHIC_ID)) {
            $modifiedColumns[':p' . $index++]  = 'graphic_id';
        }
        if ($this->isColumnModified(TypesTableMap::COL_DOGMA_ATTRIBUTES)) {
            $modifiedColumns[':p' . $index++]  = 'dogma_attributes';
        }

        $sql = sprintf(
            'INSERT INTO types (%s) VALUES (%s)',
            implode(', ', $modifiedColumns),
            implode(', ', array_keys($modifiedColumns))
        );

        try {
            $stmt = $con->prepare($sql);
            foreach ($modifiedColumns as $identifier => $columnName) {
                switch ($columnName) {
                    case 'type_id':
                        $stmt->bindValue($identifier, $this->type_id, PDO::PARAM_INT);
                        break;
                    case 'name':
                        $stmt->bindValue($identifier, $this->name, PDO::PARAM_STR);
                        break;
                    case 'description':
                        $stmt->bindValue($identifier, $this->description, PDO::PARAM_STR);
                        break;
                    case 'published':
                        $stmt->bindValue($identifier, $this->published, PDO::PARAM_INT);
                        break;
                    case 'group_id':
                        $stmt->bindValue($identifier, $this->group_id, PDO::PARAM_INT);
                        break;
                    case 'radius':
                        $stmt->bindValue($identifier, $this->radius, PDO::PARAM_INT);
                        break;
                    case 'volume':
                        $stmt->bindValue($identifier, $this->volume, PDO::PARAM_STR);
                        break;
                    case 'packaged_volume':
                        $stmt->bindValue($identifier, $this->packaged_volume, PDO::PARAM_INT);
                        break;
                    case 'icon_id':
                        $stmt->bindValue($identifier, $this->icon_id, PDO::PARAM_INT);
                        break;
                    case 'capacity':
                        $stmt->bindValue($identifier, $this->capacity, PDO::PARAM_INT);
                        break;
                    case 'portion_size':
                        $stmt->bindValue($identifier, $this->portion_size, PDO::PARAM_INT);
                        break;
                    case 'mass':
                        $stmt->bindValue($identifier, $this->mass, PDO::PARAM_INT);
                        break;
                    case 'graphic_id':
                        $stmt->bindValue($identifier, $this->graphic_id, PDO::PARAM_INT);
                        break;
                    case 'dogma_attributes':
                        $stmt->bindValue($identifier, $this->dogma_attributes, PDO::PARAM_INT);
                        break;
                }
            }
            $stmt->execute();
        } catch (Exception $e) {
            Propel::log($e->getMessage(), Propel::LOG_ERR);
            throw new PropelException(sprintf('Unable to execute INSERT statement [%s]', $sql), 0, $e);
        }

        $this->setNew(false);
    }

    /**
     * Update the row in the database.
     *
     * @param      ConnectionInterface $con
     *
     * @return Integer Number of updated rows
     * @see doSave()
     */
    protected function doUpdate(ConnectionInterface $con)
    {
        $selectCriteria = $this->buildPkeyCriteria();
        $valuesCriteria = $this->buildCriteria();

        return $selectCriteria->doUpdate($valuesCriteria, $con);
    }

    /**
     * Retrieves a field from the object by name passed in as a string.
     *
     * @param      string $name name
     * @param      string $type The type of fieldname the $name is of:
     *                     one of the class type constants TableMap::TYPE_PHPNAME, TableMap::TYPE_CAMELNAME
     *                     TableMap::TYPE_COLNAME, TableMap::TYPE_FIELDNAME, TableMap::TYPE_NUM.
     *                     Defaults to TableMap::TYPE_PHPNAME.
     * @return mixed Value of field.
     */
    public function getByName($name, $type = TableMap::TYPE_PHPNAME)
    {
        $pos = TypesTableMap::translateFieldName($name, $type, TableMap::TYPE_NUM);
        $field = $this->getByPosition($pos);

        return $field;
    }

    /**
     * Retrieves a field from the object by Position as specified in the xml schema.
     * Zero-based.
     *
     * @param      int $pos position in xml schema
     * @return mixed Value of field at $pos
     */
    public function getByPosition($pos)
    {
        switch ($pos) {
            case 0:
                return $this->getTypeId();
                break;
            case 1:
                return $this->getName();
                break;
            case 2:
                return $this->getDescription();
                break;
            case 3:
                return $this->getPublished();
                break;
            case 4:
                return $this->getGroupId();
                break;
            case 5:
                return $this->getRadius();
                break;
            case 6:
                return $this->getVolume();
                break;
            case 7:
                return $this->getPackagedVolume();
                break;
            case 8:
                return $this->getIconId();
                break;
            case 9:
                return $this->getCapacity();
                break;
            case 10:
                return $this->getPortionSize();
                break;
            case 11:
                return $this->getMass();
                break;
            case 12:
                return $this->getGraphicId();
                break;
            case 13:
                return $this->getDogmaAttributes();
                break;
            default:
                return null;
                break;
        } // switch()
    }

    /**
     * Exports the object as an array.
     *
     * You can specify the key type of the array by passing one of the class
     * type constants.
     *
     * @param     string  $keyType (optional) One of the class type constants TableMap::TYPE_PHPNAME, TableMap::TYPE_CAMELNAME,
     *                    TableMap::TYPE_COLNAME, TableMap::TYPE_FIELDNAME, TableMap::TYPE_NUM.
     *                    Defaults to TableMap::TYPE_PHPNAME.
     * @param     boolean $includeLazyLoadColumns (optional) Whether to include lazy loaded columns. Defaults to TRUE.
     * @param     array $alreadyDumpedObjects List of objects to skip to avoid recursion
     *
     * @return array an associative array containing the field names (as keys) and field values
     */
    public function toArray($keyType = TableMap::TYPE_PHPNAME, $includeLazyLoadColumns = true, $alreadyDumpedObjects = array())
    {

        if (isset($alreadyDumpedObjects['Types'][$this->hashCode()])) {
            return '*RECURSION*';
        }
        $alreadyDumpedObjects['Types'][$this->hashCode()] = true;
        $keys = TypesTableMap::getFieldNames($keyType);
        $result = array(
            $keys[0] => $this->getTypeId(),
            $keys[1] => $this->getName(),
            $keys[2] => $this->getDescription(),
            $keys[3] => $this->getPublished(),
            $keys[4] => $this->getGroupId(),
            $keys[5] => $this->getRadius(),
            $keys[6] => $this->getVolume(),
            $keys[7] => $this->getPackagedVolume(),
            $keys[8] => $this->getIconId(),
            $keys[9] => $this->getCapacity(),
            $keys[10] => $this->getPortionSize(),
            $keys[11] => $this->getMass(),
            $keys[12] => $this->getGraphicId(),
            $keys[13] => $this->getDogmaAttributes(),
        );
        $virtualColumns = $this->virtualColumns;
        foreach ($virtualColumns as $key => $virtualColumn) {
            $result[$key] = $virtualColumn;
        }


        return $result;
    }

    /**
     * Sets a field from the object by name passed in as a string.
     *
     * @param  string $name
     * @param  mixed  $value field value
     * @param  string $type The type of fieldname the $name is of:
     *                one of the class type constants TableMap::TYPE_PHPNAME, TableMap::TYPE_CAMELNAME
     *                TableMap::TYPE_COLNAME, TableMap::TYPE_FIELDNAME, TableMap::TYPE_NUM.
     *                Defaults to TableMap::TYPE_PHPNAME.
     * @return $this|\Types
     */
    public function setByName($name, $value, $type = TableMap::TYPE_PHPNAME)
    {
        $pos = TypesTableMap::translateFieldName($name, $type, TableMap::TYPE_NUM);

        return $this->setByPosition($pos, $value);
    }

    /**
     * Sets a field from the object by Position as specified in the xml schema.
     * Zero-based.
     *
     * @param  int $pos position in xml schema
     * @param  mixed $value field value
     * @return $this|\Types
     */
    public function setByPosition($pos, $value)
    {
        switch ($pos) {
            case 0:
                $this->setTypeId($value);
                break;
            case 1:
                $this->setName($value);
                break;
            case 2:
                $this->setDescription($value);
                break;
            case 3:
                $this->setPublished($value);
                break;
            case 4:
                $this->setGroupId($value);
                break;
            case 5:
                $this->setRadius($value);
                break;
            case 6:
                $this->setVolume($value);
                break;
            case 7:
                $this->setPackagedVolume($value);
                break;
            case 8:
                $this->setIconId($value);
                break;
            case 9:
                $this->setCapacity($value);
                break;
            case 10:
                $this->setPortionSize($value);
                break;
            case 11:
                $this->setMass($value);
                break;
            case 12:
                $this->setGraphicId($value);
                break;
            case 13:
                $this->setDogmaAttributes($value);
                break;
        } // switch()

        return $this;
    }

    /**
     * Populates the object using an array.
     *
     * This is particularly useful when populating an object from one of the
     * request arrays (e.g. $_POST).  This method goes through the column
     * names, checking to see whether a matching key exists in populated
     * array. If so the setByName() method is called for that column.
     *
     * You can specify the key type of the array by additionally passing one
     * of the class type constants TableMap::TYPE_PHPNAME, TableMap::TYPE_CAMELNAME,
     * TableMap::TYPE_COLNAME, TableMap::TYPE_FIELDNAME, TableMap::TYPE_NUM.
     * The default key type is the column's TableMap::TYPE_PHPNAME.
     *
     * @param      array  $arr     An array to populate the object from.
     * @param      string $keyType The type of keys the array uses.
     * @return void
     */
    public function fromArray($arr, $keyType = TableMap::TYPE_PHPNAME)
    {
        $keys = TypesTableMap::getFieldNames($keyType);

        if (array_key_exists($keys[0], $arr)) {
            $this->setTypeId($arr[$keys[0]]);
        }
        if (array_key_exists($keys[1], $arr)) {
            $this->setName($arr[$keys[1]]);
        }
        if (array_key_exists($keys[2], $arr)) {
            $this->setDescription($arr[$keys[2]]);
        }
        if (array_key_exists($keys[3], $arr)) {
            $this->setPublished($arr[$keys[3]]);
        }
        if (array_key_exists($keys[4], $arr)) {
            $this->setGroupId($arr[$keys[4]]);
        }
        if (array_key_exists($keys[5], $arr)) {
            $this->setRadius($arr[$keys[5]]);
        }
        if (array_key_exists($keys[6], $arr)) {
            $this->setVolume($arr[$keys[6]]);
        }
        if (array_key_exists($keys[7], $arr)) {
            $this->setPackagedVolume($arr[$keys[7]]);
        }
        if (array_key_exists($keys[8], $arr)) {
            $this->setIconId($arr[$keys[8]]);
        }
        if (array_key_exists($keys[9], $arr)) {
            $this->setCapacity($arr[$keys[9]]);
        }
        if (array_key_exists($keys[10], $arr)) {
            $this->setPortionSize($arr[$keys[10]]);
        }
        if (array_key_exists($keys[11], $arr)) {
            $this->setMass($arr[$keys[11]]);
        }
        if (array_key_exists($keys[12], $arr)) {
            $this->setGraphicId($arr[$keys[12]]);
        }
        if (array_key_exists($keys[13], $arr)) {
            $this->setDogmaAttributes($arr[$keys[13]]);
        }
    }

     /**
     * Populate the current object from a string, using a given parser format
     * <code>
     * $book = new Book();
     * $book->importFrom('JSON', '{"Id":9012,"Title":"Don Juan","ISBN":"0140422161","Price":12.99,"PublisherId":1234,"AuthorId":5678}');
     * </code>
     *
     * You can specify the key type of the array by additionally passing one
     * of the class type constants TableMap::TYPE_PHPNAME, TableMap::TYPE_CAMELNAME,
     * TableMap::TYPE_COLNAME, TableMap::TYPE_FIELDNAME, TableMap::TYPE_NUM.
     * The default key type is the column's TableMap::TYPE_PHPNAME.
     *
     * @param mixed $parser A AbstractParser instance,
     *                       or a format name ('XML', 'YAML', 'JSON', 'CSV')
     * @param string $data The source data to import from
     * @param string $keyType The type of keys the array uses.
     *
     * @return $this|\Types The current object, for fluid interface
     */
    public function importFrom($parser, $data, $keyType = TableMap::TYPE_PHPNAME)
    {
        if (!$parser instanceof AbstractParser) {
            $parser = AbstractParser::getParser($parser);
        }

        $this->fromArray($parser->toArray($data), $keyType);

        return $this;
    }

    /**
     * Build a Criteria object containing the values of all modified columns in this object.
     *
     * @return Criteria The Criteria object containing all modified values.
     */
    public function buildCriteria()
    {
        $criteria = new Criteria(TypesTableMap::DATABASE_NAME);

        if ($this->isColumnModified(TypesTableMap::COL_TYPE_ID)) {
            $criteria->add(TypesTableMap::COL_TYPE_ID, $this->type_id);
        }
        if ($this->isColumnModified(TypesTableMap::COL_NAME)) {
            $criteria->add(TypesTableMap::COL_NAME, $this->name);
        }
        if ($this->isColumnModified(TypesTableMap::COL_DESCRIPTION)) {
            $criteria->add(TypesTableMap::COL_DESCRIPTION, $this->description);
        }
        if ($this->isColumnModified(TypesTableMap::COL_PUBLISHED)) {
            $criteria->add(TypesTableMap::COL_PUBLISHED, $this->published);
        }
        if ($this->isColumnModified(TypesTableMap::COL_GROUP_ID)) {
            $criteria->add(TypesTableMap::COL_GROUP_ID, $this->group_id);
        }
        if ($this->isColumnModified(TypesTableMap::COL_RADIUS)) {
            $criteria->add(TypesTableMap::COL_RADIUS, $this->radius);
        }
        if ($this->isColumnModified(TypesTableMap::COL_VOLUME)) {
            $criteria->add(TypesTableMap::COL_VOLUME, $this->volume);
        }
        if ($this->isColumnModified(TypesTableMap::COL_PACKAGED_VOLUME)) {
            $criteria->add(TypesTableMap::COL_PACKAGED_VOLUME, $this->packaged_volume);
        }
        if ($this->isColumnModified(TypesTableMap::COL_ICON_ID)) {
            $criteria->add(TypesTableMap::COL_ICON_ID, $this->icon_id);
        }
        if ($this->isColumnModified(TypesTableMap::COL_CAPACITY)) {
            $criteria->add(TypesTableMap::COL_CAPACITY, $this->capacity);
        }
        if ($this->isColumnModified(TypesTableMap::COL_PORTION_SIZE)) {
            $criteria->add(TypesTableMap::COL_PORTION_SIZE, $this->portion_size);
        }
        if ($this->isColumnModified(TypesTableMap::COL_MASS)) {
            $criteria->add(TypesTableMap::COL_MASS, $this->mass);
        }
        if ($this->isColumnModified(TypesTableMap::COL_GRAPHIC_ID)) {
            $criteria->add(TypesTableMap::COL_GRAPHIC_ID, $this->graphic_id);
        }
        if ($this->isColumnModified(TypesTableMap::COL_DOGMA_ATTRIBUTES)) {
            $criteria->add(TypesTableMap::COL_DOGMA_ATTRIBUTES, $this->dogma_attributes);
        }

        return $criteria;
    }

    /**
     * Builds a Criteria object containing the primary key for this object.
     *
     * Unlike buildCriteria() this method includes the primary key values regardless
     * of whether or not they have been modified.
     *
     * @throws LogicException if no primary key is defined
     *
     * @return Criteria The Criteria object containing value(s) for primary key(s).
     */
    public function buildPkeyCriteria()
    {
        $criteria = ChildTypesQuery::create();
        $criteria->add(TypesTableMap::COL_TYPE_ID, $this->type_id);

        return $criteria;
    }

    /**
     * If the primary key is not null, return the hashcode of the
     * primary key. Otherwise, return the hash code of the object.
     *
     * @return int Hashcode
     */
    public function hashCode()
    {
        $validPk = null !== $this->getTypeId();

        $validPrimaryKeyFKs = 0;
        $primaryKeyFKs = [];

        if ($validPk) {
            return crc32(json_encode($this->getPrimaryKey(), JSON_UNESCAPED_UNICODE));
        } elseif ($validPrimaryKeyFKs) {
            return crc32(json_encode($primaryKeyFKs, JSON_UNESCAPED_UNICODE));
        }

        return spl_object_hash($this);
    }

    /**
     * Returns the primary key for this object (row).
     * @return int
     */
    public function getPrimaryKey()
    {
        return $this->getTypeId();
    }

    /**
     * Generic method to set the primary key (type_id column).
     *
     * @param       int $key Primary key.
     * @return void
     */
    public function setPrimaryKey($key)
    {
        $this->setTypeId($key);
    }

    /**
     * Returns true if the primary key for this object is null.
     * @return boolean
     */
    public function isPrimaryKeyNull()
    {
        return null === $this->getTypeId();
    }

    /**
     * Sets contents of passed object to values from current object.
     *
     * If desired, this method can also make copies of all associated (fkey referrers)
     * objects.
     *
     * @param      object $copyObj An object of \Types (or compatible) type.
     * @param      boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
     * @param      boolean $makeNew Whether to reset autoincrement PKs and make the object new.
     * @throws PropelException
     */
    public function copyInto($copyObj, $deepCopy = false, $makeNew = true)
    {
        $copyObj->setTypeId($this->getTypeId());
        $copyObj->setName($this->getName());
        $copyObj->setDescription($this->getDescription());
        $copyObj->setPublished($this->getPublished());
        $copyObj->setGroupId($this->getGroupId());
        $copyObj->setRadius($this->getRadius());
        $copyObj->setVolume($this->getVolume());
        $copyObj->setPackagedVolume($this->getPackagedVolume());
        $copyObj->setIconId($this->getIconId());
        $copyObj->setCapacity($this->getCapacity());
        $copyObj->setPortionSize($this->getPortionSize());
        $copyObj->setMass($this->getMass());
        $copyObj->setGraphicId($this->getGraphicId());
        $copyObj->setDogmaAttributes($this->getDogmaAttributes());
        if ($makeNew) {
            $copyObj->setNew(true);
        }
    }

    /**
     * Makes a copy of this object that will be inserted as a new row in table when saved.
     * It creates a new object filling in the simple attributes, but skipping any primary
     * keys that are defined for the table.
     *
     * If desired, this method can also make copies of all associated (fkey referrers)
     * objects.
     *
     * @param  boolean $deepCopy Whether to also copy all rows that refer (by fkey) to the current row.
     * @return \Types Clone of current object.
     * @throws PropelException
     */
    public function copy($deepCopy = false)
    {
        // we use get_class(), because this might be a subclass
        $clazz = get_class($this);
        $copyObj = new $clazz();
        $this->copyInto($copyObj, $deepCopy);

        return $copyObj;
    }

    /**
     * Clears the current object, sets all attributes to their default values and removes
     * outgoing references as well as back-references (from other objects to this one. Results probably in a database
     * change of those foreign objects when you call `save` there).
     */
    public function clear()
    {
        $this->type_id = null;
        $this->name = null;
        $this->description = null;
        $this->published = null;
        $this->group_id = null;
        $this->radius = null;
        $this->volume = null;
        $this->packaged_volume = null;
        $this->icon_id = null;
        $this->capacity = null;
        $this->portion_size = null;
        $this->mass = null;
        $this->graphic_id = null;
        $this->dogma_attributes = null;
        $this->alreadyInSave = false;
        $this->clearAllReferences();
        $this->resetModified();
        $this->setNew(true);
        $this->setDeleted(false);
    }

    /**
     * Resets all references and back-references to other model objects or collections of model objects.
     *
     * This method is used to reset all php object references (not the actual reference in the database).
     * Necessary for object serialisation.
     *
     * @param      boolean $deep Whether to also clear the references on all referrer objects.
     */
    public function clearAllReferences($deep = false)
    {
        if ($deep) {
        } // if ($deep)

    }

    /**
     * Return the string representation of this object
     *
     * @return string
     */
    public function __toString()
    {
        return (string) $this->exportTo(TypesTableMap::DEFAULT_STRING_FORMAT);
    }

    /**
     * Code to be run before persisting the object
     * @param  ConnectionInterface $con
     * @return boolean
     */
    public function preSave(ConnectionInterface $con = null)
    {
        if (is_callable('parent::preSave')) {
            return parent::preSave($con);
        }
        return true;
    }

    /**
     * Code to be run after persisting the object
     * @param ConnectionInterface $con
     */
    public function postSave(ConnectionInterface $con = null)
    {
        if (is_callable('parent::postSave')) {
            parent::postSave($con);
        }
    }

    /**
     * Code to be run before inserting to database
     * @param  ConnectionInterface $con
     * @return boolean
     */
    public function preInsert(ConnectionInterface $con = null)
    {
        if (is_callable('parent::preInsert')) {
            return parent::preInsert($con);
        }
        return true;
    }

    /**
     * Code to be run after inserting to database
     * @param ConnectionInterface $con
     */
    public function postInsert(ConnectionInterface $con = null)
    {
        if (is_callable('parent::postInsert')) {
            parent::postInsert($con);
        }
    }

    /**
     * Code to be run before updating the object in database
     * @param  ConnectionInterface $con
     * @return boolean
     */
    public function preUpdate(ConnectionInterface $con = null)
    {
        if (is_callable('parent::preUpdate')) {
            return parent::preUpdate($con);
        }
        return true;
    }

    /**
     * Code to be run after updating the object in database
     * @param ConnectionInterface $con
     */
    public function postUpdate(ConnectionInterface $con = null)
    {
        if (is_callable('parent::postUpdate')) {
            parent::postUpdate($con);
        }
    }

    /**
     * Code to be run before deleting the object in database
     * @param  ConnectionInterface $con
     * @return boolean
     */
    public function preDelete(ConnectionInterface $con = null)
    {
        if (is_callable('parent::preDelete')) {
            return parent::preDelete($con);
        }
        return true;
    }

    /**
     * Code to be run after deleting the object in database
     * @param ConnectionInterface $con
     */
    public function postDelete(ConnectionInterface $con = null)
    {
        if (is_callable('parent::postDelete')) {
            parent::postDelete($con);
        }
    }


    /**
     * Derived method to catches calls to undefined methods.
     *
     * Provides magic import/export method support (fromXML()/toXML(), fromYAML()/toYAML(), etc.).
     * Allows to define default __call() behavior if you overwrite __call()
     *
     * @param string $name
     * @param mixed  $params
     *
     * @return array|string
     */
    public function __call($name, $params)
    {
        if (0 === strpos($name, 'get')) {
            $virtualColumn = substr($name, 3);
            if ($this->hasVirtualColumn($virtualColumn)) {
                return $this->getVirtualColumn($virtualColumn);
            }

            $virtualColumn = lcfirst($virtualColumn);
            if ($this->hasVirtualColumn($virtualColumn)) {
                return $this->getVirtualColumn($virtualColumn);
            }
        }

        if (0 === strpos($name, 'from')) {
            $format = substr($name, 4);

            return $this->importFrom($format, reset($params));
        }

        if (0 === strpos($name, 'to')) {
            $format = substr($name, 2);
            $includeLazyLoadColumns = isset($params[0]) ? $params[0] : true;

            return $this->exportTo($format, $includeLazyLoadColumns);
        }

        throw new BadMethodCallException(sprintf('Call to undefined method: %s.', $name));
    }

}
