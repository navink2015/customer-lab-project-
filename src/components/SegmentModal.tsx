import React, { useState, useMemo } from 'react';
import { Schema, SelectedSchema, SegmentData } from '../types/schema.types';
import { AVAILABLE_SCHEMAS } from '../data/schemas';
import './SegmentModal.css';

interface SegmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  webhookUrl: string;
}

const SegmentModal: React.FC<SegmentModalProps> = ({ isOpen, onClose, webhookUrl }) => {
  const [segmentName, setSegmentName] = useState<string>('');
  const [selectedSchemas, setSelectedSchemas] = useState<SelectedSchema[]>([]);
  const [currentDropdownValue, setCurrentDropdownValue] = useState<string>('');

  // Filter available schemas to exclude already selected ones
  const availableSchemas = useMemo(() => {
    const selectedValues = selectedSchemas.map(s => s.value);
    return AVAILABLE_SCHEMAS.filter(schema => !selectedValues.includes(schema.value));
  }, [selectedSchemas]);

  const handleAddSchema = () => {
    if (!currentDropdownValue) return;

    const schemaToAdd = AVAILABLE_SCHEMAS.find(s => s.value === currentDropdownValue);
    if (schemaToAdd) {
      const newSchema: SelectedSchema = {
        ...schemaToAdd,
        id: `${schemaToAdd.value}_${Date.now()}`,
      };
      setSelectedSchemas([...selectedSchemas, newSchema]);
      setCurrentDropdownValue('');
    }
  };

  const handleRemoveSchema = (id: string) => {
    setSelectedSchemas(selectedSchemas.filter(schema => schema.id !== id));
  };

  const handleSaveSegment = async () => {
    if (!segmentName.trim()) {
      alert('Please enter a segment name');
      return;
    }

    if (selectedSchemas.length === 0) {
      alert('Please add at least one schema');
      return;
    }

    // Transform data to required format
    const segmentData: SegmentData = {
      segment_name: segmentName,
      schema: selectedSchemas.map(schema => ({
        [schema.value]: schema.label,
      })),
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(segmentData),
      });

      if (response.ok) {
        alert('Segment saved successfully!');
        handleClose();
      } else {
        alert('Failed to save segment. Please try again.');
      }
    } catch (error) {
      console.error('Error saving segment:', error);
      alert('Error saving segment. Please check your webhook URL.');
    }
  };

  const handleClose = () => {
    setSegmentName('');
    setSelectedSchemas([]);
    setCurrentDropdownValue('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="back-button" onClick={handleClose}>
            &#8249;
          </button>
          <h2>Saving Segment</h2>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="segment-name">Enter the Name of the Segment</label>
            <input
              id="segment-name"
              type="text"
              className="segment-input"
              placeholder="Name of the segment"
              value={segmentName}
              onChange={(e) => setSegmentName(e.target.value)}
            />
          </div>

          <p className="instruction-text">
            To save your segment, you need to add the schemas to build the query
          </p>

          <div className="traits-legend">
            <span className="trait-indicator">
              <span className="dot user-trait"></span> User Traits
            </span>
            <span className="trait-indicator">
              <span className="dot group-trait"></span> Group Traits
            </span>
          </div>

          {selectedSchemas.length > 0 && (
            <div className="blue-box">
              {selectedSchemas.map((schema) => (
                <div key={schema.id} className="schema-item">
                  <span className={`dot ${schema.category === 'user' ? 'user-trait' : 'group-trait'}`}></span>
                  <select
                    value={schema.value}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      const newSchema = AVAILABLE_SCHEMAS.find(s => s.value === newValue);
                      if (newSchema) {
                        setSelectedSchemas(selectedSchemas.map(s =>
                          s.id === schema.id
                            ? { ...newSchema, id: schema.id }
                            : s
                        ));
                      }
                    }}
                    className="schema-dropdown"
                  >
                    <option value={schema.value}>{schema.label}</option>
                    {availableSchemas.map((availSchema) => (
                      <option key={availSchema.value} value={availSchema.value}>
                        {availSchema.label}
                      </option>
                    ))}
                  </select>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveSchema(schema.id)}
                    aria-label="Remove schema"
                  >
                    −
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="add-schema-section">
            <span className="dot placeholder-dot"></span>
            <select
              value={currentDropdownValue}
              onChange={(e) => setCurrentDropdownValue(e.target.value)}
              className="schema-dropdown"
              disabled={availableSchemas.length === 0}
            >
              <option value="">Add schema to segment</option>
              {availableSchemas.map((schema) => (
                <option key={schema.value} value={schema.value}>
                  {schema.label}
                </option>
              ))}
            </select>
          </div>

          {availableSchemas.length > 0 && (
            <button className="add-schema-link" onClick={handleAddSchema}>
              + Add new schema
            </button>
          )}
        </div>

        <div className="modal-footer">
          <button className="save-button" onClick={handleSaveSegment}>
            Save the Segment
          </button>
          <button className="cancel-button" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>``
    </div>
  );
};

export default SegmentModal;


